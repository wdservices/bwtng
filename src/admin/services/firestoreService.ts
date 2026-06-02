import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  setDoc,
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  Timestamp,
  serverTimestamp,
  increment
} from 'firebase/firestore';
import { getFirebaseDb } from '../../../src/firebase';
import { AITool, Blog } from '../../types/admin';

const TOOLS_COLLECTION = 'tools';

function db() {
  return getFirebaseDb();
}

export const firestoreApi: any = {
  // Tools
  getTools: async (): Promise<AITool[]> => {
    try {
      const toolsCol = collection(db(), TOOLS_COLLECTION);
      const q = query(toolsCol, orderBy('name', 'asc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AITool));
    } catch (error) {
      console.error('Error fetching tools:', error);
      return [];
    }
  },

  getTool: async (toolId: string): Promise<AITool | null> => {
    try {
      const toolDoc = doc(db(), TOOLS_COLLECTION, toolId);
      const snapshot = await getDoc(toolDoc);
      if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() } as AITool;
      }
      return null;
    } catch (error) {
      console.error('Error fetching tool:', error);
      return null;
    }
  },

  createTool: async (tool: Omit<AITool, 'id'>): Promise<string | null> => {
    try {
      const docRef = await addDoc(collection(db(), TOOLS_COLLECTION), {
        ...tool,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating tool:', error);
      return null;
    }
  },

  updateTool: async (toolId: string, updates: Partial<AITool>): Promise<boolean> => {
    try {
      const toolDoc = doc(db(), TOOLS_COLLECTION, toolId);
      await updateDoc(toolDoc, {
        ...updates,
        updatedAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      console.error('Error updating tool:', error);
      return false;
    }
  },

  deleteTool: async (toolId: string): Promise<boolean> => {
    try {
      const toolDoc = doc(db(), TOOLS_COLLECTION, toolId);
      await deleteDoc(toolDoc);
      return true;
    } catch (error) {
      console.error('Error deleting tool:', error);
      return false;
    }
  },

  toggleToolFeatured: async (toolId: string, featured: boolean): Promise<boolean> => {
    try {
      const toolDoc = doc(db(), TOOLS_COLLECTION, toolId);
      await updateDoc(toolDoc, { featured, updatedAt: serverTimestamp() });
      return true;
    } catch (error) {
      console.error('Error toggling tool featured:', error);
      return false;
    }
  },

  // Blog
  getBlogs: async (): Promise<Blog[]> => {
    try {
      const blogsCol = collection(db(), 'blogs');
      const q = query(blogsCol, orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return [];
    }
  },

  getBlog: async (blogId: string): Promise<Blog | null> => {
    try {
      const blogDoc = doc(db(), 'blogs', blogId);
      const snapshot = await getDoc(blogDoc);
      if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() } as Blog;
      }
      return null;
    } catch (error) {
      console.error('Error fetching blog:', error);
      return null;
    }
  },

  createBlog: async (blog: Omit<Blog, 'id'>): Promise<string | null> => {
    try {
      const docRef = await addDoc(collection(db(), 'blogs'), {
        ...blog,
        createdAt: serverTimestamp(),
        views: 0,
        clicks: 0
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating blog:', error);
      return null;
    }
  },

  updateBlog: async (blogId: string, updates: Partial<Blog>): Promise<boolean> => {
    try {
      const blogDoc = doc(db(), 'blogs', blogId);
      await updateDoc(blogDoc, {
        ...updates,
        updatedAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      console.error('Error updating blog:', error);
      return false;
    }
  },

  deleteBlog: async (blogId: string): Promise<boolean> => {
    try {
      const blogDoc = doc(db(), 'blogs', blogId);
      await deleteDoc(blogDoc);
      return true;
    } catch (error) {
      console.error('Error deleting blog:', error);
      return false;
    }
  },

  incrementBlogViews: async (blogId: string): Promise<void> => {
    try {
      const blogDoc = doc(db(), 'blogs', blogId);
      await updateDoc(blogDoc, { views: increment(1) });
    } catch (error) {
      console.error('Error incrementing blog views:', error);
    }
  },

  incrementBlogClicks: async (blogId: string): Promise<void> => {
    try {
      const blogDoc = doc(db(), 'blogs', blogId);
      await updateDoc(blogDoc, { clicks: increment(1) });
    } catch (error) {
      console.error('Error incrementing blog clicks:', error);
    }
  },
};

// Aliases for backwards compatibility
(firestoreApi as any).addTool = firestoreApi.createTool;
(firestoreApi as any).addBlog = firestoreApi.createBlog;
