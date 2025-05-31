import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  LogOut, 
  Image, 
  Settings, 
  Download, 
  Gamepad2,
  Plus,
  Edit,
  Trash2,
  Save,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useIsMobile } from "@/hooks/use-mobile";
import AdminLogin from "./admin-login";

interface AdminPanelProps {}

export default function AdminPanel({}: AdminPanelProps) {
  const [token, setToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("hero");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const isMobile = useIsMobile();

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('adminToken');
      setToken(null);
    }
  };

  if (!token) {
    return <AdminLogin onLogin={setToken} />;
  }

  const sidebarItems = [
    { id: "hero", label: "Hero Content", icon: Image },
    { id: "features", label: "Game Features", icon: Gamepad2 },
    { id: "screenshots", label: "Screenshots", icon: Image },
    { id: "download", label: "Download", icon: Download },
  ];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-horror-black via-dark-gray to-horror-black">
      {/* Mobile Header */}
      {isMobile && (
        <div className="bg-medium-gray/30 border-b border-horror-red/20 p-4 flex items-center justify-between sticky top-0 z-50">
          <h1 className="text-lg font-gothic text-blood-red">Admin Panel</h1>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-horror-red/50"
            >
              <LogOut size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-300 hover:text-white hover:bg-horror-black/50"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <div className="bg-medium-gray/30 border-b border-horror-red/20 p-4 flex items-center justify-between sticky top-0 z-50">
          <h1 className="text-xl font-gothic text-blood-red">Admin Panel</h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="border-horror-red/30 text-gray-300 hover:bg-horror-red hover:text-white"
          >
            <LogOut size={16} className="mr-2" />
            Logout
          </Button>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        {!isMobile && (
          <div className="w-64 bg-medium-gray/30 border-r border-horror-red/20 min-h-screen">
            <div className="p-6">
              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id ? "bg-horror-red text-white" : "text-gray-300 hover:bg-horror-black/50"
                    }`}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Mobile Sidebar Overlay */}
        {isMobile && sidebarOpen && (
          <div className="fixed inset-0 z-40">
            <div 
              className="absolute inset-0 bg-black/50" 
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="relative w-64 bg-medium-gray/95 backdrop-blur-sm border-r border-horror-red/20 h-full"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-xl font-gothic text-blood-red">Menu</h1>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSidebarOpen(false)}
                    className="text-gray-300 hover:text-white"
                  >
                    <X size={20} />
                  </Button>
                </div>
                <nav className="space-y-2">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleTabChange(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === item.id ? "bg-horror-red text-white" : "text-gray-300 hover:bg-horror-black/50"
                      }`}
                    >
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </motion.div>
          </div>
        )}

        {/* Main Content */}
        <div className={`flex-1 p-4 sm:p-6 lg:p-8 ${isMobile && sidebarOpen ? 'blur-sm' : ''}`}>
          {activeTab === "hero" && <HeroContentTab token={token} />}
          {activeTab === "features" && <GameFeaturesTab token={token} />}
          {activeTab === "screenshots" && <ScreenshotsTab token={token} />}
          {activeTab === "download" && <DownloadTab token={token} />}
        </div>
      </div>
    </div>
  );
}

function HeroContentTab({ token }: { token: string }) {
  const [trailerThumbnail, setTrailerThumbnail] = useState("");
  const [trailerVideoLink, setTrailerVideoLink] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: heroContent } = useQuery({
    queryKey: ['/api/hero-content'],
  });

  useEffect(() => {
    if (heroContent) {
      setTrailerThumbnail((heroContent as any)?.trailerThumbnail || "");
      setTrailerVideoLink((heroContent as any)?.trailerVideoLink || "");
    }
  }, [heroContent]);

  const updateMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/admin/hero-content', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/hero-content'] });
      toast({
        title: "Hero Content Updated",
        description: "Changes saved successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Update Failed",
        description: error instanceof Error ? error.message : "Failed to update content",
        variant: "destructive",
      });
    }
  });

  const handleSave = () => {
    updateMutation.mutate({
      trailerThumbnail,
      trailerVideoLink
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 sm:space-y-6"
    >
      <h2 className="text-xl sm:text-2xl font-gothic text-blood-red">Hero Content Management</h2>
      
      <div className="bg-medium-gray/30 rounded-lg p-4 sm:p-6 border border-horror-red/20">
        <div className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2 text-sm sm:text-base">Trailer Thumbnail URL</label>
            <Input
              value={trailerThumbnail}
              onChange={(e) => setTrailerThumbnail(e.target.value)}
              placeholder="https://example.com/thumbnail.jpg"
              className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 text-sm sm:text-base focus:bg-horror-black focus:border-blood-red"
            />
          </div>
          
          <div>
            <label className="block text-white font-medium mb-2 text-sm sm:text-base">Trailer Video Link</label>
            <Input
              value={trailerVideoLink}
              onChange={(e) => setTrailerVideoLink(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 text-sm sm:text-base focus:bg-horror-black focus:border-blood-red"
            />
          </div>

          <Button
            onClick={handleSave}
            disabled={updateMutation.isPending}
            className="bg-horror-red hover:bg-blood-red w-full sm:w-auto"
          >
            <Save size={18} className="mr-2" />
            {updateMutation.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function GameFeaturesTab({ token }: { token: string }) {
  const [newFeature, setNewFeature] = useState({
    title: "",
    description: "",
    iconName: "",
    order: 1
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: features = [] } = useQuery({
    queryKey: ['/api/game-features'],
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/admin/game-features', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/game-features'] });
      setNewFeature({ title: "", description: "", iconName: "", order: 1 });
      toast({
        title: "Feature Added",
        description: "New game feature created successfully",
      });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/game-features/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/game-features'] });
      toast({
        title: "Feature Deleted",
        description: "Game feature removed successfully",
      });
    }
  });

  const handleCreate = () => {
    if (!newFeature.title || !newFeature.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    createMutation.mutate(newFeature);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-gothic text-blood-red">Game Features Management</h2>
      
      {/* Add New Feature */}
      <div className="bg-medium-gray/30 rounded-lg p-6 border border-horror-red/20">
        <h3 className="text-lg font-semibold text-white mb-4">Add New Feature</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Feature Title"
            value={newFeature.title}
            onChange={(e) => setNewFeature({...newFeature, title: e.target.value})}
            className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
          />
          <Input
            placeholder="Icon Name (e.g., Eye, Puzzle)"
            value={newFeature.iconName}
            onChange={(e) => setNewFeature({...newFeature, iconName: e.target.value})}
            className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
          />
        </div>
        <Textarea
          placeholder="Feature Description"
          value={newFeature.description}
          onChange={(e) => setNewFeature({...newFeature, description: e.target.value})}
          className="mt-4 bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
        />
        <div className="flex items-center space-x-4 mt-4">
          <Input
            type="number"
            placeholder="Order"
            value={newFeature.order}
            onChange={(e) => setNewFeature({...newFeature, order: parseInt(e.target.value)})}
            className="w-32 bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
          />
          <Button
            onClick={handleCreate}
            disabled={createMutation.isPending}
            className="bg-horror-red hover:bg-blood-red"
          >
            <Plus size={18} className="mr-2" />
            Add Feature
          </Button>
        </div>
      </div>

      {/* Existing Features */}
      <div className="space-y-4">
        {(features as any[]).map((feature: any) => (
          <div key={feature.id} className="bg-medium-gray/30 rounded-lg p-4 border border-horror-red/20">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-white font-semibold">{feature.title}</h4>
                <p className="text-gray-300 text-sm mt-1">{feature.description}</p>
                <p className="text-gray-400 text-xs mt-2">Icon: {feature.iconName} | Order: {feature.order}</p>
              </div>
              <Button
                onClick={() => deleteMutation.mutate(feature.id)}
                variant="outline"
                size="sm"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ScreenshotsTab({ token }: { token: string }) {
  const [newScreenshot, setNewScreenshot] = useState({
    imageUrl: "",
    altText: "",
    order: 1
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: screenshots = [] } = useQuery({
    queryKey: ['/api/game-screenshots'],
  });

  const createMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/admin/game-screenshots', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/game-screenshots'] });
      setNewScreenshot({ imageUrl: "", altText: "", order: 1 });
      toast({
        title: "Screenshot Added",
        description: "New screenshot added successfully",
      });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/game-screenshots/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/game-screenshots'] });
      toast({
        title: "Screenshot Deleted",
        description: "Screenshot removed successfully",
      });
    }
  });

  const handleCreate = () => {
    if (!newScreenshot.imageUrl || !newScreenshot.altText) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    createMutation.mutate(newScreenshot);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-gothic text-blood-red">Screenshots Management</h2>
      
      {/* Add New Screenshot */}
      <div className="bg-medium-gray/30 rounded-lg p-6 border border-horror-red/20">
        <h3 className="text-lg font-semibold text-white mb-4">Add New Screenshot</h3>
        <div className="space-y-4">
          <Input
            placeholder="Image URL"
            value={newScreenshot.imageUrl}
            onChange={(e) => setNewScreenshot({...newScreenshot, imageUrl: e.target.value})}
            className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
          />
          <Input
            placeholder="Alt Text"
            value={newScreenshot.altText}
            onChange={(e) => setNewScreenshot({...newScreenshot, altText: e.target.value})}
            className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
          />
          <div className="flex items-center space-x-4">
            <Input
              type="number"
              placeholder="Order"
              value={newScreenshot.order}
              onChange={(e) => setNewScreenshot({...newScreenshot, order: parseInt(e.target.value)})}
              className="w-32 bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
            />
            <Button
              onClick={handleCreate}
              disabled={createMutation.isPending}
              className="bg-horror-red hover:bg-blood-red"
            >
              <Plus size={18} className="mr-2" />
              Add Screenshot
            </Button>
          </div>
        </div>
      </div>

      {/* Existing Screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(screenshots as any[]).map((screenshot: any) => (
          <div key={screenshot.id} className="bg-medium-gray/30 rounded-lg p-4 border border-horror-red/20">
            <img 
              src={screenshot.imageUrl} 
              alt={screenshot.altText}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <p className="text-white text-sm font-medium">{screenshot.altText}</p>
            <p className="text-gray-400 text-xs mt-1">Order: {screenshot.order}</p>
            <Button
              onClick={() => deleteMutation.mutate(screenshot.id)}
              variant="outline"
              size="sm"
              className="mt-3 w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              <Trash2 size={16} className="mr-2" />
              Delete
            </Button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function DownloadTab({ token }: { token: string }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: downloadContent } = useQuery({
    queryKey: ['/api/download-content'],
  });

  useEffect(() => {
    if (downloadContent) {
      setTitle((downloadContent as any)?.title || "");
      setDescription((downloadContent as any)?.description || "");
      setButtonText((downloadContent as any)?.buttonText || "");
      setDownloadLink((downloadContent as any)?.downloadLink || "");
      setIsAvailable((downloadContent as any)?.isAvailable || false);
    }
  }, [downloadContent]);

  const updateMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch('/api/admin/download-content', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/download-content'] });
      toast({
        title: "Download Content Updated",
        description: "Changes saved successfully",
      });
    }
  });

  const handleSave = () => {
    updateMutation.mutate({
      title,
      description,
      buttonText,
      downloadLink,
      isAvailable
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-gothic text-blood-red">Download Section Management</h2>
      
      <div className="bg-medium-gray/30 rounded-lg p-6 border border-horror-red/20">
        <div className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-2">Title</label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Download Section Title"
              className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
            />
          </div>
          
          <div>
            <label className="block text-white font-medium mb-2">Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Download description..."
              className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Button Text</label>
            <Input
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              placeholder="Download Now"
              className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Download Link (optional)</label>
            <Input
              value={downloadLink}
              onChange={(e) => setDownloadLink(e.target.value)}
              placeholder="https://example.com/download"
              className="bg-horror-black/80 border-horror-red/50 text-white placeholder:text-gray-400 focus:bg-horror-black focus:border-blood-red"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="isAvailable"
              checked={isAvailable}
              onChange={(e) => setIsAvailable(e.target.checked)}
              className="w-4 h-4 text-blood-red"
            />
            <label htmlFor="isAvailable" className="text-white">
              Game is available for download
            </label>
          </div>

          <Button
            onClick={handleSave}
            disabled={updateMutation.isPending}
            className="bg-horror-red hover:bg-blood-red"
          >
            <Save size={18} className="mr-2" />
            {updateMutation.isPending ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}