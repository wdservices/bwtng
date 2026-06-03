import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
  Plus, Edit, Trash2, Eye, X, RefreshCw, LogIn, LogOut, 
  FileText, TrendingUp, Eye as EyeIcon, MousePointerClick 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';
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
import { Blog, BlogStatus } from '@/types/admin';
import { firestoreApi } from '@/admin/services/firestoreService';
import { signOut, onAuthStateChangedListener, signInWithGoogle } from '@/admin/services/authService';
import { LoginForm } from '@/admin/components/LoginForm';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const BlogAdmin = () => {
  const contentTextareaRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newTag, setNewTag] = useState('');
  const [imagePreviewError, setImagePreviewError] = useState(false);
  const [selectedContentText, setSelectedContentText] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const { toast } = useToast();

  const defaultFormData: Omit<Blog, 'id' | 'createdBy' | 'updatedBy'> = {
    title: '',
    content: '',
    excerpt: '',
    imageUrl: '',
    status: BlogStatus.PUBLISHED,
    tags: [],
    clicks: 0,
    views: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  const [formData, setFormData] = useState<Omit<Blog, 'id'>>(defaultFormData);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setCurrentUser(user);
      setIsAuthenticating(false);
      if (user) {
        loadBlogs();
      }
    });

    return () => unsubscribe();
  }, []);

  const loadBlogs = async () => {
    try {
      setIsLoading(true);
      const blogs = await firestoreApi.getBlogs();
      setBlogs(blogs);
    } catch (error) {
      console.error('Error loading blogs:', error);
      let errorMessage = 'Failed to load blogs';
      
      if (error instanceof Error) {
        errorMessage = error.message || errorMessage;
      }
      
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
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
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await firestoreApi.deleteBlog(id);
        setBlogs(blogs.filter(blog => blog.id !== id));
        toast({
          title: 'Success',
          description: 'Blog deleted successfully',
        });
      } catch (err) {
        console.error('Error deleting blog:', err);
        toast({
          title: 'Error',
          description: 'Failed to delete blog',
          variant: 'destructive',
        });
      }
    }
  };

  const handleEdit = (blog: Blog) => {
    setImagePreviewError(false);
    setSelectedContentText('');
    setLinkUrl('');
    setFormData({
      title: blog.title,
      content: blog.content,
      excerpt: blog.excerpt || '',
      imageUrl: blog.imageUrl || '',
      status: blog.status,
      tags: [...blog.tags],
      clicks: blog.clicks,
      views: blog.views,
      createdAt: blog.createdAt || new Date(),
      updatedAt: blog.updatedAt || new Date(),
    });
    setEditingBlog(blog);
    setIsDialogOpen(true);
  };

  const handleAddNew = () => {
    const now = new Date();
    setImagePreviewError(false);
    setSelectedContentText('');
    setLinkUrl('');
    setFormData({
      title: '',
      content: '',
      excerpt: '',
      imageUrl: '',
      status: BlogStatus.PUBLISHED,
      tags: [],
      clicks: 0,
      views: 0,
      createdAt: now,
      updatedAt: now,
      createdBy: currentUser?.uid || '',
      updatedBy: currentUser?.uid || ''
    });
    setEditingBlog(null);
    setNewTag('');
    setIsDialogOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => {
      const newValue = (() => {
        if (type === 'number') return parseFloat(value) || 0;
        if (type === 'checkbox') return (e.target as HTMLInputElement).checked;
        return value;
      })();

      return {
        ...prev,
        [name]: newValue,
        ...(prev.status === undefined && { status: BlogStatus.DRAFT }),
        ...(prev.tags === undefined && { tags: [] }),
        ...(prev.createdAt === undefined && { createdAt: new Date() }),
        ...(prev.updatedAt === undefined && { updatedAt: new Date() }),
        ...(prev.clicks === undefined && { clicks: 0 }),
        ...(prev.views === undefined && { views: 0 }),
      };
    });

    if (name === 'imageUrl') {
      setImagePreviewError(false);
    }
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      setFormData(prev => ({
        ...prev,
        tags: [...(prev.tags || []), newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: (prev.tags || []).filter((_, i) => i !== index)
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const updateSelectedContentText = () => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    const selectedText = value.slice(selectionStart, selectionEnd);
    setSelectedContentText(selectedText);
  };

  const handleInsertLink = () => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;
    const selectedText = value.slice(selectionStart, selectionEnd).trim();
    const normalizedUrl = linkUrl.trim();

    if (!selectedText) {
      toast({
        title: 'Select text first',
        description: 'Highlight the text you want to turn into a clickable link.',
        variant: 'destructive',
      });
      return;
    }

    if (!normalizedUrl) {
      toast({
        title: 'Link required',
        description: 'Enter the URL you want to attach to the selected text.',
        variant: 'destructive',
      });
      return;
    }

    const finalUrl = /^https?:\/\//i.test(normalizedUrl) ? normalizedUrl : `https://${normalizedUrl}`;
    const linkedText = `[${selectedText}](${finalUrl})`;
    const newContent = `${value.slice(0, selectionStart)}${linkedText}${value.slice(selectionEnd)}`;

    setFormData((prev) => ({
      ...prev,
      content: newContent,
    }));
    setSelectedContentText('');
    setLinkUrl('');

    requestAnimationFrame(() => {
      const updatedTextarea = contentTextareaRef.current;
      if (!updatedTextarea) return;

      const newCursorPosition = selectionStart + linkedText.length;
      updatedTextarea.focus();
      updatedTextarea.setSelectionRange(newCursorPosition, newCursorPosition);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingBlog) {
        await firestoreApi.updateBlog(editingBlog.id, {
          ...formData,
          updatedAt: new Date(),
          updatedBy: currentUser?.uid || ''
        });
        toast({
          title: 'Success',
          description: 'Blog updated successfully',
          variant: 'default',
        });
      } else {
        const blogId = await firestoreApi.addBlog({
          ...formData,
          createdBy: currentUser?.uid || '',
          updatedBy: currentUser?.uid || '',
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        toast({
          title: 'Success',
          description: `Blog added successfully. ID: ${blogId}`,
          variant: 'default',
        });
      }
      
      loadBlogs();
      setIsDialogOpen(false);
      setEditingBlog(null);
    } catch (error) {
      console.error('Error saving blog:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to save blog. Please try again.',
        variant: 'destructive',
      });
    }
  };

  if (isAuthenticating) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4 text-gray-600 dark:text-gray-300">Checking authentication...</p>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md p-8 space-y-8 bg-card border border-border/60 rounded-2xl shadow-xl">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight">Welcome to Blog Admin</h2>
            <p className="mt-2 text-sm text-muted-foreground">Please sign in to continue</p>
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
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

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
    <div className="min-h-screen bg-background p-6">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground tracking-tight">Blog Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage your blog posts and analytics
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={loadBlogs}
              disabled={isLoading}
              className="hidden sm:flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Refreshing...' : 'Refresh'}
            </Button>
            <Button
              onClick={handleAddNew}
              className="rounded-xl"
              disabled={isLoading}
            >
              <Plus className="h-4 w-4 mr-2" />
              New Blog Post
            </Button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-card border border-border/60 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Total Blogs</p>
              <p className="text-2xl font-semibold text-foreground mt-1.5">{blogs.length}</p>
            </div>
            <div className="p-2.5 rounded-xl bg-primary/10">
              <FileText className="h-4 w-4 text-primary" />
            </div>
          </div>
        </div>
        <div className="bg-card border border-border/60 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Published</p>
              <p className="text-2xl font-semibold text-emerald-400 mt-1.5">
                {blogs.filter(b => b.status === 'published').length}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10">
              <FileText className="h-4 w-4 text-emerald-400" />
            </div>
          </div>
        </div>
        <div className="bg-card border border-border/60 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Total Views</p>
              <p className="text-2xl font-semibold text-foreground mt-1.5">
                {blogs.reduce((sum, b) => sum + (b.views || 0), 0)}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10">
              <EyeIcon className="h-4 w-4 text-purple-400" />
            </div>
          </div>
        </div>
        <div className="bg-card border border-border/60 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Total Clicks</p>
              <p className="text-2xl font-semibold text-foreground mt-1.5">
                {blogs.reduce((sum, b) => sum + (b.clicks || 0), 0)}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-orange-500/10">
              <MousePointerClick className="h-4 w-4 text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border/60 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h2 className="font-medium text-foreground">All Blog Posts</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/15 text-primary">
              {blogs.length} {blogs.length === 1 ? 'post' : 'posts'}
            </span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30">
                <TableHead className="min-w-[200px]">Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead className="text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-12">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <FileText className="h-10 w-10 text-gray-400" />
                      <p className="text-gray-500 dark:text-gray-400">No blog posts found</p>
                      <Button 
                        onClick={handleAddNew}
                        variant="ghost" 
                        className="mt-2"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Create your first blog post
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                blogs.map((blog) => (
                  <TableRow key={blog.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 h-10 w-10 rounded-sm bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                          {blog.imageUrl ? (
                            <img 
                              src={blog.imageUrl} 
                              alt={blog.title} 
                              className="h-full w-full object-cover rounded-md"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <FileText className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{blog?.title || 'Untitled'}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {blog.tags?.slice(0, 2).map((tag, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className={`h-2 w-2 rounded-full mr-2 ${
                          blog.status === 'published' ? 'bg-green-500' : 
                          blog.status === 'draft' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`}></span>
                        <span className="capitalize">{blog.status || 'unknown'}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">
                        <EyeIcon className="h-3 w-3 mr-1" />
                        {blog.views || 0}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300">
                        <MousePointerClick className="h-3 w-3 mr-1" />
                        {blog.clicks || 0}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-1">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleEdit(blog)}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                          onClick={() => blog.id && handleDelete(blog.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-card border-border/60">
          <DialogHeader>
            <DialogTitle className="text-foreground tracking-tight">
              {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 p-1">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows={2}
                placeholder="Brief description of the blog post"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content *</Label>
              <Textarea
                ref={contentTextareaRef}
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                onSelect={updateSelectedContentText}
                onKeyUp={updateSelectedContentText}
                onMouseUp={updateSelectedContentText}
                rows={8}
                required
                placeholder="Write your blog content here..."
              />
              <div className="rounded-lg border border-border p-3 bg-gray-50 dark:bg-gray-900/40 space-y-3">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Selected text
                  </p>
                  <div className="min-h-10 rounded-md border border-dashed border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800">
                    {selectedContentText || 'Highlight text inside the content box to link it.'}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contentLinkUrl">Link URL</Label>
                  <Input
                    id="contentLinkUrl"
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    placeholder="https://example.com"
                  />
                </div>
                <Button type="button" variant="outline" onClick={handleInsertLink}>
                  Add Link To Selected Text
                </Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Use `[link text](https://example.com)` for linked text, or paste a full URL to make it clickable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com/image.jpg"
                />
                {formData.imageUrl ? (
                  <div className="rounded-lg border border-border p-3 bg-gray-50 dark:bg-gray-900/40">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                      Live preview
                    </p>
                    {!imagePreviewError ? (
                      <img
                        src={formData.imageUrl}
                        alt="Blog preview"
                        className="w-full h-40 object-cover rounded-md bg-white"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => setImagePreviewError(true)}
                      />
                    ) : (
                      <div className="h-40 rounded-md border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 text-center px-4">
                        Preview unavailable. The link may be blocked by the image host, or it may need a direct image URL.
                      </div>
                    )}
                  </div>
                ) : null}
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
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Only published posts appear on the public blog page.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex space-x-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag"
                  className="flex-1"
                />
                <Button type="button" onClick={handleAddTag} variant="outline">
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags?.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50 dark:bg-gray-800">
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(index)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 ml-1"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {editingBlog ? 'Update Blog' : 'Create Blog'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogAdmin;
