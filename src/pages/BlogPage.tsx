import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Brain,
  Sparkles,
  BookOpen,
  TrendingUp,
  Mail
} from "lucide-react";

const featuredPost = {
  id: 1,
  title: "The Future of AI in Education: How Enzol is Leading the Revolution",
  excerpt: "Explore how artificial intelligence is transforming the educational landscape and why personalized AI tutoring is becoming essential for modern learning.",
  author: "Dr. Sarah Chen",
  date: "December 15, 2024",
  readTime: "8 min read",
  category: "AI Education",
  image: "/placeholder-blog-featured.jpg",
};

const blogPosts = [
  // {
  //   id: 2,
  //   title: "5 Ways AI Can Accelerate Your Research Process",
  //   excerpt: "Discover practical strategies for using AI tools to streamline literature reviews, data analysis, and hypothesis generation.",
  //   author: "Michael Rodriguez",
  //   date: "December 12, 2024",
  //   readTime: "6 min read",
  //   category: "Research",
  //   image: "/placeholder-blog-1.jpg",
  // },
  // {
  //   id: 3,
  //   title: "Engineering Students: Why AI Tools Are Your Secret Weapon",
  //   excerpt: "Learn how engineering students are using AI to solve complex problems, optimize designs, and accelerate project timelines.",
  //   author: "Emily Zhang",
  //   date: "December 10, 2024",
  //   readTime: "5 min read",
  //   category: "Engineering",
  //   image: "/placeholder-blog-2.jpg",
  // },
  // {
  //   id: 4,
  //   title: "The Science Behind Enzol's Image Generation Technology",
  //   excerpt: "A deep dive into the advanced neural networks and machine learning algorithms powering our AI image generation capabilities.",
  //   author: "Alex Chen",
  //   date: "December 8, 2024",
  //   readTime: "10 min read",
  //   category: "Technology",
  //   image: "/placeholder-blog-3.jpg",
  // },
  // {
  //   id: 5,
  //   title: "From Concept to Publication: AI-Assisted Academic Writing",
  //   excerpt: "How researchers are using AI tools to improve their writing, structure arguments, and accelerate the publication process.",
  //   author: "Dr. Lisa Park",
  //   date: "December 5, 2024",
  //   readTime: "7 min read",
  //   category: "Academic Writing",
  //   image: "/placeholder-blog-4.jpg",
  // },
  // {
  //   id: 6,
  //   title: "Building the Next Generation of AI Learning Platforms",
  //   excerpt: "An inside look at the development process behind Enzol and the challenges of creating truly intelligent educational tools.",
  //   author: "Tom Johnson",
  //   date: "December 3, 2024",
  //   readTime: "9 min read",
  //   category: "Product Development",
  //   image: "/placeholder-blog-5.jpg",
  // },
  // {
  //   id: 7,
  //   title: "AI Ethics in Education: Balancing Innovation and Responsibility",
  //   excerpt: "Exploring the ethical considerations of AI in educational settings and how we ensure responsible development at Enzol.",
  //   author: "Dr. Maria Santos",
  //   date: "December 1, 2024",
  //   readTime: "8 min read",
  //   category: "Ethics",
  //   image: "/placeholder-blog-6.jpg",
  // },
];

const categories = [
  // "All Posts",
  // "AI Education", 
  // "Research",
  // "Engineering",
  // "Technology",
  // "Academic Writing",
  // "Product Development",
  // "Ethics"
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <BookOpen className="h-12 w-12 text-primary" />
              <div className="absolute inset-0 text-primary opacity-50 blur-sm">
                <BookOpen className="h-12 w-12" />
              </div>
            </div>
          </div>
          <h1 className="text-hero text-glow mb-6">
            Enzol Blog
          </h1>
          <p className="text-subtitle text-muted-foreground">
            Insights, updates, and deep dives into the world of AI-powered learning and research
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="glass-card overflow-hidden group hover:glow-primary transition-smooth cursor-pointer">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <div className="h-64 lg:h-full bg-gradient-primary flex items-center justify-center rounded-l-lg">
                  <div className="text-center text-primary-foreground p-6 lg:p-8">
                    <Brain className="h-12 lg:h-16 w-12 lg:w-16 mx-auto mb-4 drop-shadow-lg" />
                    <p className="text-base lg:text-lg font-semibold">Featured Article</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-6 lg:p-8">
                <div className="flex items-center mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground shadow-md">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-4 group-hover:text-primary transition-smooth line-clamp-3">
                  {featuredPost.title}
                </h2>
                <p className="text-sm lg:text-base text-muted-foreground mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-xs lg:text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                      <span className="truncate">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary self-start sm:self-auto">
                    Read More
                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "primary" : "outline"}
                size="sm"
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="glass-card overflow-hidden group hover:glow-primary transition-smooth cursor-pointer"
            >
              <div className="h-48 bg-gradient-secondary flex items-center justify-center">
                <div className="text-center text-secondary-foreground">
                  <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm font-medium">{post.category}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-body text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="hover:glow-primary">
            Load More Articles
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="glass-card text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full gradient-primary">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated with Enzol
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              Get the latest insights on AI, research, and education delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg glass border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary" className="glow-primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}