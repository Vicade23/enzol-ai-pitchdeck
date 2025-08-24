import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Send, BarChart3, Image, Brain, Loader2, ThumbsUp, ThumbsDown, RotateCcw, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { ImageGenerator } from "@/components/lab/ImageGenerator";
import { GraphGenerator } from "@/components/lab/GraphGenerator";
import { QuizGenerator } from "@/components/lab/QuizGenerator";
import { toast } from "sonner";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  showActions?: boolean;
  attachment?: {
    type: 'image' | 'graph' | 'quiz';
    data: any;
  };
}

interface ChatAction {
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function LabPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
      showActions: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeGenerator, setActiveGenerator] = useState<'image' | 'graph' | 'quiz' | null>(null);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const responses = [
        "That's an interesting question! Let me help you with that.",
        "I understand what you're looking for. Here's my analysis:",
        "Great point! Based on your input, I can suggest the following:",
        "Let me break this down for you in a clear way.",
        "I'd be happy to help you explore this topic further."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        isUser: false,
        timestamp: new Date(),
        showActions: true
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, aiMessage]);
    }, 2000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    
    simulateAIResponse(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFeedback = (type: 'like' | 'dislike') => {
    toast.success("Feedback submitted to Enzol");
  };

  const handleReload = () => {
    setMessages([{
      id: '1',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
      showActions: true
    }]);
  };

  const handleNewProject = () => {
    if (projectTitle.trim()) {
      setMessages([{
        id: '1',
        content: `Started new project: "${projectTitle}". How can I help you with this project?`,
        isUser: false,
        timestamp: new Date(),
        showActions: true
      }]);
      setProjectTitle("");
      setShowNewProjectModal(false);
    }
  };

  const handleAttachment = (type: 'image' | 'graph' | 'quiz', data: any) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: `Generated ${type}`,
      isUser: true,
      timestamp: new Date(),
      attachment: { type, data }
    };
    setMessages(prev => [...prev, userMessage]);
    setActiveGenerator(null);
  };

  const chatActions: ChatAction[] = [
    {
      label: "Generate Graph",
      icon: <BarChart3 className="h-4 w-4" />,
      action: () => setActiveGenerator('graph')
    },
    {
      label: "Generate Image",
      icon: <Image className="h-4 w-4" />,
      action: () => setActiveGenerator('image')
    },
    {
      label: "Take Quiz",
      icon: <Brain className="h-4 w-4" />,
      action: () => setActiveGenerator('quiz')
    }
  ];

  const feedbackActions: ChatAction[] = [
    {
      label: "Like",
      icon: <ThumbsUp className="h-4 w-4" />,
      action: () => handleFeedback('like')
    },
    {
      label: "Dislike",
      icon: <ThumbsDown className="h-4 w-4" />,
      action: () => handleFeedback('dislike')
    },
    {
      label: "Reload",
      icon: <RotateCcw className="h-4 w-4" />,
      action: handleReload
    }
  ];

  const TypingIndicator = () => (
    <div className="flex items-center space-x-2 p-3 rounded-2xl bg-muted max-w-[70%] animate-pulse">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <span className="text-sm text-muted-foreground">AI is typing...</span>
    </div>
  );

  const MessageBubble = ({ message }: { message: Message }) => (
    <div className={cn(
      "flex w-full mb-4",
      message.isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[70%] md:max-w-[60%] rounded-2xl px-4 py-3 break-words",
        message.isUser 
          ? "bg-primary text-primary-foreground ml-auto rounded-br-md" 
          : "bg-muted text-foreground rounded-bl-md"
      )}>
        <p className="text-sm leading-relaxed">{message.content}</p>
        
        {/* Attachments */}
        {message.attachment && (
          <div className="mt-3 p-3 rounded-lg bg-background/50 border border-border">
            {message.attachment.type === 'image' && (
              <div className="space-y-2">
                <p className="text-xs font-medium">Generated Image</p>
                <img 
                  src={message.attachment.data.imageUrl} 
                  alt="Generated" 
                  className="max-w-full rounded-md"
                />
              </div>
            )}
            {message.attachment.type === 'graph' && (
              <div className="space-y-2">
                <p className="text-xs font-medium">Generated Graph</p>
                <div className="text-xs text-muted-foreground">
                  Type: {message.attachment.data.type}
                </div>
              </div>
            )}
            {message.attachment.type === 'quiz' && (
              <div className="space-y-2">
                <p className="text-xs font-medium">Quiz Results</p>
                <div className="text-xs text-muted-foreground">
                  Score: {message.attachment.data.score}/{message.attachment.data.total} • 
                  Time: {message.attachment.data.timeSpent}s
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className={cn(
          "text-xs mt-2 opacity-70",
          message.isUser ? "text-right" : "text-left"
        )}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        
        {!message.isUser && message.showActions && (
          <div className="space-y-2">
            <div className="flex gap-2 mt-3 pt-3 border-t border-border/50">
              {chatActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="flex items-center gap-2 text-xs"
                >
                  {action.icon}
                  {action.label}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 pt-2 border-t border-border/30">
              {feedbackActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={action.action}
                  className="flex items-center gap-2 text-xs h-7"
                >
                  {action.icon}
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Header */}
      <div className="border-b border-border p-4 bg-card shrink-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Lab</h1>
            <p className="text-sm text-muted-foreground">Your intelligent workspace assistant</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowNewProjectModal(true)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              New Project
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden">
        <ScrollArea ref={scrollAreaRef} className="h-full p-4 pb-32">
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <TypingIndicator />
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Fixed Input Area */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border p-4 bg-card/95 backdrop-blur-sm z-40">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="min-h-[44px] resize-none rounded-full border-border focus:border-primary"
                disabled={isTyping}
              />
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              size="icon"
              className="h-11 w-11 rounded-full shrink-0"
            >
              {isTyping ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
            </Button>
          </div>
          
          <div className="flex justify-center mt-2">
            <p className="text-xs text-muted-foreground">
              AI can make mistakes. Please verify important information.
            </p>
          </div>
        </div>
      </div>

      {/* New Project Modal */}
      <Dialog open={showNewProjectModal} onOpenChange={setShowNewProjectModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Start New Project</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Enter project title..."
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleNewProject();
                }
              }}
            />
            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setShowNewProjectModal(false);
                  setProjectTitle("");
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleNewProject}
                disabled={!projectTitle.trim()}
              >
                Start Project
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Generator Overlays */}
      {activeGenerator === 'image' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <ImageGenerator onClose={() => setActiveGenerator(null)} onGenerate={(data) => handleAttachment('image', data)} />
        </div>
      )}
      
      {activeGenerator === 'graph' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <GraphGenerator onClose={() => setActiveGenerator(null)} onGenerate={(data) => handleAttachment('graph', data)} />
        </div>
      )}
      
      {activeGenerator === 'quiz' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <QuizGenerator onClose={() => setActiveGenerator(null)} onGenerate={(data) => handleAttachment('quiz', data)} />
        </div>
      )}
    </div>
  );
}