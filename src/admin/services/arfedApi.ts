// Using Vercel deployment URL for ARFed-Main
const ARFED_API_BASE_URL = 'https://ar-fed.vercel.app/api';

export interface User {
  id: string;
  name?: string;
  email?: string;
  role?: string;
  createdAt?: string;
  // Add other user fields as needed
}

export interface Model {
  id: string;
  name: string;
  description?: string;
  createdBy?: string;
  createdAt?: string;
  // Add other model fields as needed
}

export const arfedApi = {
  // Users with better error handling and mock data fallback
  async getUsers(): Promise<User[]> {
    try {
      // Try fetching from the actual API first
      const response = await fetch(`${ARFED_API_BASE_URL}/users`);
      if (!response.ok) {
        console.warn('Failed to fetch users from API, using mock data');
        throw new Error('API request failed');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      // Return mock data if API is not available
      return [
        { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin', createdAt: new Date().toISOString() },
        { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'user', createdAt: new Date().toISOString() },
      ];
    }
  },

  // Models with better error handling and mock data fallback
  async getModels(): Promise<Model[]> {
    try {
      // Try fetching from the actual API first
      const response = await fetch(`${ARFED_API_BASE_URL}/models`);
      if (!response.ok) {
        console.warn('Failed to fetch models from API, using mock data');
        throw new Error('API request failed');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching models:', error);
      // Return mock data if API is not available
      return [
        { 
          id: '1', 
          name: 'GPT-4', 
          description: 'Advanced AI language model', 
          createdBy: 'system',
          createdAt: new Date().toISOString() 
        },
        { 
          id: '2', 
          name: 'DALL-E', 
          description: 'Image generation model',
          createdBy: 'system',
          createdAt: new Date().toISOString() 
        },
      ];
    }
  },

  // Add more API methods as needed for other endpoints
};
