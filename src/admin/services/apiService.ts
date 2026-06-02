import { arfedApi, type User as ArfedUser, type Model } from './arfedApi';
import { prepMateApi, type Payment, type Checkout } from './prepMateApi';

// Re-export all types for easier imports
export type { ArfedUser, Model, Payment, Checkout };

export const apiService = {
  // ARFed API
  arfed: {
    users: {
      getAll: arfedApi.getUsers,
    },
    models: {
      getAll: arfedApi.getModels,
    },
  },

  // PrepMate API
  prepMate: {
    payments: {
      create: prepMateApi.createPayment,
    },
    checkouts: {
      create: prepMateApi.createCheckout,
    },
  },

  // Helper function to handle API errors consistently
  handleError(error: unknown): { message: string; details?: any } {
    if (error instanceof Error) {
      return { message: error.message, details: error };
    }
    return { message: 'An unknown error occurred', details: error };
  },

  // Add more APIs here as needed
};

export default apiService;
