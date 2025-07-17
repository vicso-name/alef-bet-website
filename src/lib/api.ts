const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://admin.hebrewedu.com/api' 
  : 'https://admin.hebrewedu.com/api';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  read_time: string;
  featured_image: string | null;
  published: boolean;
  featured: boolean;
  created_at: string;
  published_at: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  tags: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${slug}`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/featured`);
    if (!response.ok) throw new Error('Failed to fetch featured posts');
    return response.json();
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}