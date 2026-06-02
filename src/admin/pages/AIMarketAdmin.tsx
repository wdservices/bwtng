import * as React from 'react';
import { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { 
  Plus, Edit, Trash2, Eye, X, ExternalLink, RefreshCw, LogIn, LogOut, 
  Box, CheckCircle, FileText, Star, MoreVertical 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { AITool, ToolStatus } from '@/types/admin';
import { firestoreApi } from '@/admin/services/firestoreService';
import { signOut, onAuthStateChangedListener, signInWithGoogle, getCurrentUser } from '@/admin/services/authService';
import { LoginForm } from '@/admin/components/LoginForm';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

// Using the AITool interface from types/admin

export const AIMarketAdmin = () => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentTool, setCurrentTool] = useState<AITool | null>(null);
  const [editingTool, setEditingTool] = useState<AITool | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newFeature, setNewFeature] = useState('');
  const { toast } = useToast();

  const defaultFormData: Omit<AITool, 'id' | 'createdBy' | 'updatedBy' | 'imageUrl'> = {
    name: '',
    description: '',
    price: 0,
    category: 'content-creation',
    features: [],
    demoUrl: '',
    documentationUrl: '',
    status: ToolStatus.DRAFT,
    isFeatured: false,
    isActive: true,
    rating: 0,
    tags: [],
    keywords: [],
    createdAt: new Date(),
    updatedAt: new Date()
  };

  const [formData, setFormData] = useState<Omit<AITool, 'id'>>(defaultFormData);

  useEffect(() => {
    console.log('Setting up auth state listener');
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log('Auth state changed, user:', user);
      setCurrentUser(user);
      setIsAuthenticating(false);
      if (user) {
        console.log('User authenticated, loading tools...');
        loadTools();
      } else {
        console.log('No user signed in');
      }
    });

    return () => {
      console.log('Cleaning up auth state listener');
      unsubscribe();
    };
  }, []);

  const loadTools = async () => {
    console.log('loadTools called');
    try {
      setIsLoading(true);
      console.log('Fetching tools from Firestore...');
      const tools = await firestoreApi.getTools();
      console.log('Tools fetched:', tools);
      setTools(tools);
      
      if (tools.length === 0) {
        console.warn('No tools found in the database');
        toast({
          title: 'No Tools Found',
          description: 'No AI tools were found in the database.',
          variant: 'default',
        });
      }
    } catch (error) {
      console.error('Error loading tools:', error);
      let errorMessage = 'Failed to load tools';
      
      if (error instanceof Error) {
        errorMessage = error.message || errorMessage;
        console.error('Error details:', {
          message: error.message,
          name: error.name,
          stack: error.stack
        });
      }
      
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      console.log('Loading state set to false');
    }
  };

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error('Error signing in with Google:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to sign in with Google',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
      toast({
        title: 'Signed out',
        description: 'You have been signed out successfully',
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: 'Error',
        description: 'Failed to sign out',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this tool?')) {
      try {
        await firestoreApi.deleteTool(id);
        setTools(tools.filter(tool => tool.id !== id));
        toast({
          title: 'Success',
          description: 'Tool deleted successfully',
        });
      } catch (err) {
        console.error('Error deleting tool:', err);
        toast({
          title: 'Error',
          description: 'Failed to delete tool',
          variant: 'destructive',
        });
        console.error('Error deleting tool:', err);
      }
    }
  };

  const handleEdit = (tool: AITool) => {
    setFormData({
      name: tool.name,
      description: tool.description,
      category: tool.category,
      price: tool.price,
      rating: tool.rating,
      demoUrl: tool.demoUrl || '',
      documentationUrl: tool.documentationUrl || '',
      isFeatured: tool.isFeatured || false,
      isActive: tool.isActive,
      features: [...tool.features],
      tags: tool.tags || [],
      keywords: tool.keywords || [],
      status: tool.status || ToolStatus.DRAFT,
      createdAt: tool.createdAt || new Date(),
      updatedAt: tool.updatedAt || new Date(),
    });
    setEditingTool(tool);
    setIsDialogOpen(true);
  };

  const handleAddNew = () => {
    const now = new Date();
    setFormData({
      name: '',
      description: '',
      category: 'content-creation',
      price: 0,
      rating: 0,
      demoUrl: '',
      documentationUrl: '',
      isFeatured: false,
      isActive: true,
      features: [],
      tags: [],
      keywords: [],
      status: ToolStatus.DRAFT,
      createdAt: now,
      updatedAt: now,
      imageUrl: '',
      createdBy: currentUser?.uid || '',
      updatedBy: currentUser?.uid || ''
    });
    setEditingTool(null);
    setNewFeature('');
    setIsDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => {
      const newValue = (() => {
        if (type === 'number') return parseFloat(value) || 0;
        if (type === 'checkbox') return (e.target as HTMLInputElement).checked;
        if (type === 'select-multiple') {
          return Array.from((e.target as HTMLSelectElement).selectedOptions, option => option.value);
        }
        return value;
      })();

      return {
        ...prev,
        [name]: newValue,
        // Ensure required fields are always set
        ...(prev.status === undefined && { status: ToolStatus.DRAFT }),
        ...(prev.tags === undefined && { tags: [] }),
        ...(prev.keywords === undefined && { keywords: [] }),
        ...(prev.createdAt === undefined && { createdAt: new Date() }),
        ...(prev.updatedAt === undefined && { updatedAt: new Date() }),
        ...(prev.isActive === undefined && { isActive: true }),
        ...(prev.isFeatured === undefined && { isFeatured: false }),
        ...(prev.rating === undefined && { rating: 0 }),
      };
    });
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...(prev.features || []), newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: (prev.features || []).filter((_, i) => i !== index)
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFeatureChange = (index: number, value: string) => {
    setFormData(prev => {
      const features = Array.isArray(prev.features) ? [...prev.features] : [];
      features[index] = value;
      return {
        ...prev,
        features: features.filter(Boolean) // Remove any empty strings
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingTool) {
        await firestoreApi.updateTool(editingTool.id, {
          ...formData,
          updatedAt: new Date(),
          updatedBy: currentUser?.uid || ''
        });
        toast({
          title: 'Success',
          description: 'Tool updated successfully',
          variant: 'default',
        });
      } else {
        await firestoreApi.addTool({
          ...formData,
          createdBy: currentUser?.uid || '',
          updatedBy: currentUser?.uid || '',
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        toast({
          title: 'Success',
          description: 'Tool added successfully',
          variant: 'default',
        });
      }
      
      loadTools();
      setIsDialogOpen(false);
      setEditingTool(null);
    } catch (error) {
      console.error('Error saving tool:', error);
      toast({
        title: 'Error',
        description: 'Failed to save tool. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData(prev => ({
        ...prev,
        features: [...(prev.features || []), newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: (prev.features || []).filter((_, i) => i !== index)
    }));
  };

  console.log('Rendering AIMarketAdmin', {
    isAuthenticating,
    currentUser: !!currentUser,
    isLoading,
    toolsCount: tools.length,
    error
  });

  // Show loading state during initial authentication check
  if (isAuthenticating) {
    console.log('Rendering authentication loading state');
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-gray-600 dark:text-gray-300">Checking authentication...</p>
      </div>
    );
  }

  // Show login screen if not authenticated
  if (!currentUser) {
    console.log('Rendering login screen - no current user');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to AI Tools Admin</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Please sign in to continue</p>
          </div>
          <Button
            onClick={handleSignIn}
            className="w-full flex justify-center items-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              <>
                <LogIn className="h-4 w-4" />
                Sign in with Google
              </>
            )}
          </Button>
          <div className="text-center mt-4">
            <p className="text-xs text-red-500">If you see this message, the component is rendering but content may not be visible.</p>
            <p className="text-xs text-gray-500 mt-2">Check browser console for debug logs.</p>
          </div>
        </div>
      </div>
    );
  }

  // Show loading state for content loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">AI Tools Dashboard</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Manage your AI tools and services
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={loadTools}
              disabled={isLoading}
              className="hidden sm:flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Refreshing...' : 'Refresh'}
            </Button>
            <Button
              onClick={handleAddNew}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isLoading}
            >
              <Plus className="h-4 w-4 mr-2" />
              New AI Tool
            </Button>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Tools</p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{tools.length}</p>
            </div>
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
              <Box className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Published</p>
              <p className="text-2xl font-semibold text-green-600 dark:text-green-400">
                {tools.filter(t => t.status === 'published').length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Drafts</p>
              <p className="text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
                {tools.filter(t => t.status === 'draft').length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
              <FileText className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Featured</p>
              <p className="text-2xl font-semibold text-purple-600 dark:text-purple-400">
                {tools.filter(t => t.isFeatured).length}
              </p>
            </div>
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
              <Star className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Tools Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h2 className="font-medium text-gray-900 dark:text-white">All AI Tools</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {tools.length} {tools.length === 1 ? 'tool' : 'tools'}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Search tools..."
              className="max-w-xs"
              // Add search functionality here
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 dark:bg-gray-800">
                <TableHead className="w-10">
                  <Checkbox />
                </TableHead>
                <TableHead className="min-w-[200px]">Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tools.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-12">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <Box className="h-10 w-10 text-gray-400" />
                      <p className="text-gray-500 dark:text-gray-400">No tools found</p>
                      <Button 
                        onClick={handleAddNew}
                        variant="ghost" 
                        className="mt-2"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add your first tool
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                tools.map((tool) => (
                  <TableRow key={tool.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-10 w-10 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          {tool.imageUrl ? (
                            <img 
                              src={tool.imageUrl} 
                              alt={tool.name} 
                              className="h-full w-full object-cover rounded-md"
                            />
                          ) : (
                            <Box className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{tool?.name || 'Unnamed Tool'}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {tool?.price > 0 ? `$${Number(tool.price).toFixed(2)}/mo` : 'Free'}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {tool?.category?.replace('-', ' ') || 'uncategorized'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className={`h-2 w-2 rounded-full mr-2 ${
                          tool.status === 'published' ? 'bg-green-500' : 
                          tool.status === 'draft' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`}></span>
                        <span className="capitalize">{tool.status || 'unknown'}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleEdit(tool)}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                          onClick={() => tool.id && handleDelete(tool.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-40">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              <span>View</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleEdit(tool)}>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                              className="text-red-600 dark:text-red-400"
                              onClick={() => tool.id && handleDelete(tool.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Delete</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white">
              {editingTool ? 'Edit AI Tool' : 'Add New AI Tool'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 p-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleSelectChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="content-creation">Content Creation</option>
                  <option value="coding">Coding</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="productivity">Productivity</option>
                  <option value="analytics">Analytics</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">Price ($) *</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleSelectChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Features</Label>
              <div className="flex space-x-2">
                <Input
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  placeholder="Add a feature"
                  className="flex-1"
                />
                <Button type="button" onClick={handleAddFeature} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.features?.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50 dark:bg-gray-800">
                    {feature}
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(index)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="demoUrl">Demo URL</Label>
                <Input
                  id="demoUrl"
                  name="demoUrl"
                  type="url"
                  value={formData.demoUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/demo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="documentationUrl">Documentation URL</Label>
                <Input
                  id="documentationUrl"
                  name="documentationUrl"
                  type="url"
                  value={formData.documentationUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/docs"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2">
                <input
                  id="isFeatured"
                  type="checkbox"
                  name="isFeatured"
                  checked={formData.isFeatured}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <Label htmlFor="isFeatured">Featured</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  id="isActive"
                  type="checkbox"
                  name="isActive"
                  checked={formData.isActive}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <Label htmlFor="isActive">Active</Label>
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingTool ? 'Update Tool' : 'Create Tool'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {tools.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    No tools found. Add your first tool to get started.
                  </td>
                </tr>
              ) : (
                tools.map((tool) => (
                  <tr key={tool.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                          {tool.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {tool.name}
                            {tool.isFeatured && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900">
                                Featured
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                            {tool.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {tool.category || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                      {tool.price > 0 ? `$${tool.price.toFixed(2)}` : 'Free'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${tool.isActive ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                        {tool.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => {
                          const rating = tool.rating || 0;
                          return (
                            <svg
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          );
                        })}
                        <span className="ml-1 text-gray-600 dark:text-gray-400">
                          ({(tool.rating || 0).toFixed(1)})
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <a
                          href={tool.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          title="View Demo"
                        >
                          <Eye className="h-5 w-5" />
                        </a>
                        <button
                          onClick={() => handleEdit(tool)}
                          className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300"
                          title="Edit"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(tool.id)}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          title="Delete"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 dark:bg-red-900/10 p-6">
          <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Something went wrong</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const AIMarketAdminWithErrorBoundary = () => (
  <ErrorBoundary>
    <AIMarketAdmin />
  </ErrorBoundary>
);

export default AIMarketAdminWithErrorBoundary;
