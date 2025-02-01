import { Client } from "@notionhq/client";

interface S3UrlInfo {
  bucket: string;
  region: string;
  key: string;
  originalUrl: string;
}

class NotionImageHandler {
  private readonly client: Client;
  private readonly cache: Map<string, {
    url: string;
    expires: number;
  }> = new Map();

  constructor(client: Client) {
    this.client = client;
  }

  private parseS3Url(url: string): S3UrlInfo | null {
    try {
      const urlObj = new URL(url);
      if (!urlObj.hostname.includes('s3') || !urlObj.pathname) {
        return null;
      }

      // Extract bucket and region from hostname
      // Format: prod-files-secure.s3.us-west-2.amazonaws.com
      const hostParts = urlObj.hostname.split('.');
      if (hostParts.length < 4) return null;
      
      const region = hostParts[2];
      const bucket = hostParts[0];
      if (!region || !bucket) return null;

      // Remove leading slash from pathname to get key
      const key = urlObj.pathname.substring(1);

      return {
        bucket: bucket,
        region: region,
        key,
        originalUrl: url
      };
    } catch (e) {
      console.error('Failed to parse S3 URL:', e);
      return null;
    }
  }

  async getImageUrl(notionImageBlock: any): Promise<string> {
    const imageUrl = notionImageBlock.image[notionImageBlock.image.type];
    const urlInfo = this.parseS3Url(imageUrl);
    
    if (!urlInfo) {
      return imageUrl; // Return original URL if not an S3 URL
    }

    const cacheKey = `${urlInfo.bucket}/${urlInfo.key}`;
    const now = Date.now();
    const cached = this.cache.get(cacheKey);

    // Check cache first
    if (cached && cached.expires > now) {
      return cached.url;
    }

    try {
      // Get fresh signed URL from Notion
      // This assumes you're using the Notion API to get a fresh URL
      const response = await this.client.blocks.retrieve({
        block_id: notionImageBlock.id
      });

      if ('image' in response && 'file' in response.image) {
        const newUrl = response.image.file.url;
        
        // Cache the new URL with expiration
        // Set expiration 5 minutes before actual expiry to be safe
        const expiresIn = 3600 * 1000; // 1 hour in milliseconds
        this.cache.set(cacheKey, {
          url: newUrl,
          expires: now + (expiresIn - 300000) // Expire 5 minutes early
        });

        return newUrl;
      }
    } catch (error) {
      console.error('Failed to refresh image URL:', error);
    }

    // Fallback to original URL if refresh fails
    return imageUrl;
  }

}

export async function createImageHandler(client: Client): Promise<NotionImageHandler> {
  return new NotionImageHandler(client);
}
