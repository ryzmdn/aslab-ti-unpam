import axios, { AxiosInstance } from "axios";

export const API_CONFIG = {
  WORDPRESS_BASE_URL: process.env.NEXT_PUBLIC_WORDPRESS_API || "",
  TIMEOUT: 10000,
  CACHE_DURATION: 3600,
};

class WordPressService {
  private client: AxiosInstance;

  constructor() {
    const baseURL =
      API_CONFIG.WORDPRESS_BASE_URL ||
      process.env.NEXT_PUBLIC_WORDPRESS_API ||
      "";

    this.client = axios.create({
      baseURL,
      timeout: API_CONFIG.TIMEOUT,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  }

  async getPosts<T = unknown>(params?: Record<string, unknown>): Promise<T[]> {
    try {
      if (!this.client.defaults.baseURL) {
        console.warn("WordPress API URL not configured");
        return [];
      }
      const response = await this.client.get<T[]>("/posts", {
        params: {
          per_page: 100,
          _embed: true,
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

  async getPostBySlug<T = unknown>(slug: string): Promise<T | null> {
    try {
      const posts = await this.getPosts<T>({
        slug,
      });
      return posts[0] || null;
    } catch (error) {
      console.error("Error fetching post by slug:", error);
      return null;
    }
  }

  async getCategories<T = unknown>(): Promise<T[]> {
    try {
      if (!this.client.defaults.baseURL) {
        return [];
      }
      const response = await this.client.get<T[]>("/categories", {
        params: {
          per_page: 100,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }

  async getPostsByCategory<T = unknown>(
    categoryId: number,
    limit: number = 100
  ): Promise<T[]> {
    try {
      if (!this.client.defaults.baseURL) {
        console.warn("WordPress API URL not configured");
        return [];
      }
      const response = await this.client.get<T[]>("/posts", {
        params: {
          categories: categoryId,
          per_page: limit,
          orderby: "date",
          order: "desc",
          status: "publish",
          _embed: true,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching posts by category:", error);
      return [];
    }
  }

  async getTags<T = unknown>(): Promise<T[]> {
    try {
      if (!this.client.defaults.baseURL) {
        return [];
      }
      const response = await this.client.get<T[]>("/tags", {
        params: {
          per_page: 100,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching tags:", error);
      return [];
    }
  }
}

export const wordPressService = new WordPressService();
