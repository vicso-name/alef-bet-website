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

const fetchOptions: RequestInit = {
  next: { 
    revalidate: 300
  },
  headers: {
    'Content-Type': 'application/json',
  }
};

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      ...fetchOptions,
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.filter((post: BlogPost) => post.published);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${slug}`, fetchOptions);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const post = await response.json();
    
    if (!post.published) {
      return null;
    }
    
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/featured`, {
      ...fetchOptions,
      next: { revalidate: 300 }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.filter((post: BlogPost) => post.published && post.featured);
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}


export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/category/${categorySlug}`, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.filter((post: BlogPost) => post.published);
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

export async function searchPosts(query: string): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/search?q=${encodeURIComponent(query)}`, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.filter((post: BlogPost) => post.published);
  } catch (error) {
    console.error('Error searching posts:', error);
    return [];
  }
}

export async function getCategories(): Promise<Array<{ id: number; name: string; slug: string; }>> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      ...fetchOptions,
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getLatestPosts(limit: number = 5): Promise<BlogPost[]> {
  try {
    const allPosts = await getAllPosts();
    return allPosts
      .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching latest posts:', error);
    return [];
  }
}

export async function getRelatedPosts(currentPostId: number, categoryId: number, limit: number = 3): Promise<BlogPost[]> {
  try {
    const allPosts = await getAllPosts();
    return allPosts
      .filter(post => post.id !== currentPostId && post.category.id === categoryId)
      .sort(() => Math.random() - 0.5)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}