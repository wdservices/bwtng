declare module '../services/firestoreService' {
  import { AITool } from './admin';
  
  export const firestoreApi: {
    getTools: () => Promise<AITool[]>;
    getTool: (id: string) => Promise<AITool | null>;
    addTool: (tool: Omit<AITool, 'id'>) => Promise<string>;
    updateTool: (id: string, tool: Partial<AITool>) => Promise<void>;
    deleteTool: (id: string) => Promise<void>;
    searchTools: (searchTerm: string) => Promise<AITool[]>;
  };
}

declare module '../services/authService' {
  import { User } from 'firebase/auth';
  
  export const signInWithGoogle: () => Promise<User>;
  export const signInWithEmail: (email: string, password: string) => Promise<User>;
  export const signOut: () => Promise<void>;
  export const onAuthStateChangedListener: (callback: (user: User | null) => void) => () => void;
  export const getCurrentUser: () => Promise<User | null>;
}

declare module '../components/LoginForm' {
  import { FC } from 'react';
  
  interface LoginFormProps {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
  }
  
  export const LoginForm: FC<LoginFormProps>;
  export default LoginForm;
}
