const PREP_MATE_API_BASE_URL = 'http://localhost:3001/api'; // Update with your PrepMate URL

// Define interfaces for the data we expect from the API
export interface AITool {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Payment {
  id: string;
  amount: number;
  status: string;
  userId: string;
  createdAt: string;
  // Add other payment fields as needed
}

export interface Checkout {
  id: string;
  userId: string;
  amount: number;
  status: string;
  createdAt: string;
  // Add other checkout fields as needed
}

export const prepMateApi = {
  // Payment endpoints
  async createPayment(paymentData: Omit<Payment, 'id' | 'createdAt'>): Promise<Payment> {
    const response = await fetch(`${PREP_MATE_API_BASE_URL}/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    });
    if (!response.ok) {
      throw new Error('Failed to create payment');
    }
    return response.json();
  },

  // Checkout endpoints
  async createCheckout(checkoutData: Omit<Checkout, 'id' | 'createdAt'>): Promise<Checkout> {
    const response = await fetch(`${PREP_MATE_API_BASE_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(checkoutData),
    });
    if (!response.ok) {
      throw new Error('Failed to create checkout');
    }
    return response.json();
  },

  // AI Tools endpoints
  async getAITools(): Promise<AITool[]> {
    const response = await fetch(`${PREP_MATE_API_BASE_URL}/ai-tools`);
    if (!response.ok) {
      throw new Error('Failed to fetch AI tools');
    }
    return response.json();
  },

  async getAIToolById(id: string): Promise<AITool> {
    const response = await fetch(`${PREP_MATE_API_BASE_URL}/ai-tools/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch AI tool with ID: ${id}`);
    }
    return response.json();
  },

  async createAITool(toolData: Omit<AITool, 'id' | 'createdAt' | 'updatedAt'>, imageFile?: File): Promise<AITool> {
    const formData = new FormData();
    
    // Append all tool data as JSON string
    formData.append('tool', JSON.stringify(toolData));
    
    // Append image file if provided
    if (imageFile) {
      formData.append('image', imageFile);
    }

    const response = await fetch(`${PREP_MATE_API_BASE_URL}/ai-tools`, {
      method: 'POST',
      body: formData,
      // Note: Don't set Content-Type header when using FormData, let the browser set it with the correct boundary
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create AI tool');
    }
    return response.json();
  },

  async updateAITool(id: string, toolData: Partial<AITool>, imageFile?: File): Promise<AITool> {
    const formData = new FormData();
    
    // Append all tool data as JSON string
    formData.append('tool', JSON.stringify(toolData));
    
    // Append image file if provided
    if (imageFile) {
      formData.append('image', imageFile);
    }

    const response = await fetch(`${PREP_MATE_API_BASE_URL}/ai-tools/${id}`, {
      method: 'PUT',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update AI tool');
    }
    return response.json();
  },

  async deleteAITool(id: string): Promise<void> {
    const response = await fetch(`${PREP_MATE_API_BASE_URL}/ai-tools/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete AI tool');
    }
  },
};
