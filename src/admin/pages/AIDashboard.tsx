import { useState, useEffect } from 'react';
import { AITool } from '../services/prepMateApi';
import { prepMateApi } from '../services/prepMateApi';
import { toast } from 'react-toastify';

const AI_TOOL_CATEGORIES = [
  'Content Creation',
  'Computer Vision',
  'NLP',
  'Code Generation',
  'Audio Processing',
  'Data Analysis',
  'Other'
];

export const AIDashboard = () => {
  const [tools, setTools] = useState<AITool[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTool, setCurrentTool] = useState<AITool | null>(null);
  const [formData, setFormData] = useState<Partial<AITool>>({
    name: '',
    description: '',
    price: 0,
    category: '',
    isActive: true,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setIsLoading(true);
        const data = await prepMateApi.getAITools();
        setTools(data);
      } catch (error) {
        console.error('Error fetching AI tools:', error);
        toast.error('Failed to load AI tools');
      } finally {
        setIsLoading(false);
      }
    };
    fetchTools();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.match('image.*')) { toast.error('Please select a valid image file'); return; }
      if (file.size > 5 * 1024 * 1024) { toast.error('Image size should be less than 5MB'); return; }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', price: 0, category: '', isActive: true });
    setImageFile(null);
    setImagePreview(null);
    setCurrentTool(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (currentTool) {
        const updatedTool = await prepMateApi.updateAITool(currentTool.id, formData, imageFile || undefined);
        setTools(tools.map(tool => tool.id === currentTool.id ? updatedTool : tool));
        toast.success('AI tool updated successfully');
      } else {
        const newTool = await prepMateApi.createAITool(formData as Omit<AITool, 'id' | 'createdAt' | 'updatedAt'>, imageFile || undefined);
        setTools([newTool, ...tools]);
        toast.success('AI tool created successfully');
      }
      setIsModalOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error saving AI tool:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to save AI tool');
    }
  };

  const handleEdit = (tool: AITool) => {
    setCurrentTool(tool);
    setFormData({ name: tool.name, description: tool.description, price: tool.price, category: tool.category, isActive: tool.isActive });
    setImagePreview(tool.imageUrl || null);
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this AI tool?')) {
      try {
        await prepMateApi.deleteAITool(id);
        setTools(tools.filter(tool => tool.id !== id));
        toast.success('AI tool deleted successfully');
      } catch (error) {
        console.error('Error deleting AI tool:', error);
        toast.error('Failed to delete AI tool');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">AI Tools</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your AI tools marketplace</p>
        </div>
        <button
          onClick={() => { resetForm(); setIsModalOpen(true); }}
          className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          + Add Tool
        </button>
      </div>

      <div className="glass-card rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tools.map((tool) => (
                <tr key={tool.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-foreground">{tool.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{tool.description}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{tool.category}</td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">${tool.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${tool.isActive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-muted text-muted-foreground'}`}>
                      {tool.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <button onClick={() => handleEdit(tool)} className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">Edit</button>
                    <button onClick={() => handleDelete(tool.id)} className="text-xs font-medium text-destructive hover:text-destructive/80 transition-colors">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="glass-card rounded-2xl p-7 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-foreground">{currentTool ? 'Edit Tool' : 'New Tool'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Image</label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                    {imagePreview ? <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" /> : <span className="text-muted-foreground text-xs">No img</span>}
                  </div>
                  <label htmlFor="image-upload" className="px-3 py-1.5 text-xs font-medium border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors text-foreground">
                    {imagePreview ? 'Change' : 'Upload'}
                  </label>
                  <input id="image-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name *</label>
                <input type="text" name="name" value={formData.name || ''} onChange={handleInputChange} required className="w-full px-3 py-2.5 bg-muted/50 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Description</label>
                <textarea name="description" rows={3} value={formData.description || ''} onChange={handleInputChange} required className="w-full px-3 py-2.5 bg-muted/50 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Price ($)</label>
                  <input type="number" name="price" min="0" step="0.01" value={formData.price || 0} onChange={handleInputChange} required className="w-full px-3 py-2.5 bg-muted/50 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Category *</label>
                  <select name="category" value={formData.category || ''} onChange={handleInputChange} required className="w-full px-3 py-2.5 bg-muted/50 border border-border rounded-xl text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">Select</option>
                    {AI_TOOL_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <label className="flex items-center gap-2.5 cursor-pointer">
                <input type="checkbox" name="isActive" checked={formData.isActive || false} onChange={handleInputChange} className="h-4 w-4 rounded border-border text-primary focus:ring-primary/50" />
                <span className="text-sm text-foreground">Active</span>
              </label>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => { setIsModalOpen(false); resetForm(); }} className="flex-1 px-4 py-2.5 border border-border rounded-xl text-sm font-medium text-foreground hover:bg-muted transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors">
                  {currentTool ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIDashboard;
