import { 
  Settings, 
  Moon, 
  Sun, 
  Monitor, 
  Bell, 
  Mail, 
  Shield, 
  Globe,
  Palette,
  Volume2,
  Download,
  Trash2,
  Eye,
  EyeOff
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Input } from "../components/ui/input";
import { Slider } from "../components/ui/slider";
import { useState } from "react";

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <div className="space-y-6 max-w-full">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-glow mb-2">Settings</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Customize your Enzol experience and manage your preferences
          </p>
        </div>
      </div>

      <Tabs defaultValue="appearance" className="w-full">
        <div className="overflow-x-auto">
          <TabsList className="grid w-full grid-cols-4 glass-card min-w-max">
            <TabsTrigger value="appearance" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Appearance</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Notifications</TabsTrigger>
            <TabsTrigger value="privacy" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Privacy</TabsTrigger>
            <TabsTrigger value="advanced" className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">Advanced</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Palette className="mr-2 h-5 w-5 text-primary" />
                Appearance & Theme
              </CardTitle>
              <CardDescription>
                Customize how Enzol looks and feels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-foreground mb-4 block">Theme</Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 border border-border/50 rounded-lg cursor-pointer hover:border-primary/50 transition-smooth">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sun className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Light</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Clean and bright interface</p>
                  </div>
                  <div className="p-4 border border-primary rounded-lg bg-primary/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Moon className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Dark</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Easy on the eyes</p>
                  </div>
                  <div className="p-4 border border-border/50 rounded-lg cursor-pointer hover:border-primary/50 transition-smooth">
                    <div className="flex items-center space-x-2 mb-2">
                      <Monitor className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">System</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Follows system preference</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Glass Effects</Label>
                    <p className="text-xs text-muted-foreground">Enable glassmorphism UI effects</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Animations</Label>
                    <p className="text-xs text-muted-foreground">Enable smooth transitions and animations</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Glow Effects</Label>
                    <p className="text-xs text-muted-foreground">Enable glowing text and button effects</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground mb-2 block">Font Size</Label>
                <div className="space-y-2">
                  <Slider
                    defaultValue={[100]}
                    max={150}
                    min={75}
                    step={25}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Small</span>
                    <span>Normal</span>
                    <span>Large</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Bell className="mr-2 h-5 w-5 text-primary" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Email Notifications</Label>
                    <p className="text-xs text-muted-foreground">Receive updates via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Push Notifications</Label>
                    <p className="text-xs text-muted-foreground">Get instant notifications in your browser</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Project Updates</Label>
                    <p className="text-xs text-muted-foreground">Notifications about your projects</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Team Activity</Label>
                    <p className="text-xs text-muted-foreground">Updates from your team members</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Product Updates</Label>
                    <p className="text-xs text-muted-foreground">News about new features and improvements</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Marketing Emails</Label>
                    <p className="text-xs text-muted-foreground">Tips, tutorials, and promotional content</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground mb-2 block">Notification Sound</Label>
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-4 w-4 text-muted-foreground" />
                  <Select defaultValue="default">
                    <SelectTrigger className="glass-input border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-border/50">
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="chime">Chime</SelectItem>
                      <SelectItem value="ping">Ping</SelectItem>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                Privacy & Security
              </CardTitle>
              <CardDescription>
                Control your privacy settings and data usage
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Public Profile</Label>
                    <p className="text-xs text-muted-foreground">Make your profile visible to other users</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Analytics Tracking</Label>
                    <p className="text-xs text-muted-foreground">Help improve Enzol by sharing usage data</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Show Online Status</Label>
                    <p className="text-xs text-muted-foreground">Let team members see when you're active</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Third-party Integrations</Label>
                    <p className="text-xs text-muted-foreground">Allow connections to external services</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="pt-4 border-t border-border/30">
                <h3 className="font-medium text-foreground mb-4">Data Management</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Download My Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-xl text-foreground flex items-center">
                <Settings className="mr-2 h-5 w-5 text-primary" />
                Advanced Settings
              </CardTitle>
              <CardDescription>
                Developer and advanced user settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-foreground mb-2 block">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="glass-input border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-border/50">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="zh">中文</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground mb-2 block">Timezone</Label>
                <Select defaultValue="utc-8">
                  <SelectTrigger className="glass-input border-border/50">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-border/50">
                    <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                    <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                    <SelectItem value="utc+0">GMT (UTC+0)</SelectItem>
                    <SelectItem value="utc+9">Japan Time (UTC+9)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-foreground mb-2 block">API Key</Label>
                <div className="flex items-center space-x-2">
                  <Input 
                    type={showApiKey ? "text" : "password"}
                    value="sk-enz0l-1234567890abcdef..."
                    readOnly
                    className="glass-input border-border/50 font-mono text-sm"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowApiKey(!showApiKey)}
                  >
                    {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Use this key to access Enzol API programmatically
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Developer Mode</Label>
                    <p className="text-xs text-muted-foreground">Enable advanced debugging features</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Beta Features</Label>
                    <p className="text-xs text-muted-foreground">Get early access to experimental features</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium text-foreground">Console Logging</Label>
                    <p className="text-xs text-muted-foreground">Enable detailed console output</p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="pt-4 border-t border-border/30">
                <Button variant="outline" className="w-full">
                  Reset All Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}