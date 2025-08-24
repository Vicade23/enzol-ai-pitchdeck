import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Brain, Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log("Password reset for:", email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full gradient-primary">
                <CheckCircle className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-glow">Check Your Email</h2>
            <p className="mt-2 text-body text-muted-foreground">
              We've sent a password reset link to your email address
            </p>
          </div>

          <div className="glass-card space-y-6">
            <div className="text-center space-y-4">
              <p className="text-body">
                We've sent a password reset link to:
              </p>
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-primary font-medium">{email}</p>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Click the link in the email to reset your password.</p>
                <p>If you don't see the email, check your spam folder.</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="primary"
                className="w-full glow-primary"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Resend Email
              </Button>
              
              <Link to="/signin" className="block">
                <Button variant="ghost" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Brain className="h-12 w-12 text-primary" />
              <div className="absolute inset-0 text-primary opacity-50 blur-sm">
                <Brain className="h-12 w-12" />
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-glow">Reset Your Password</h2>
          <p className="mt-2 text-body text-muted-foreground">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        <form className="glass-card space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium mb-2">
              Email address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="pl-10 glass"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              variant="primary"
              className="w-full glow-primary"
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Reset Link
            </Button>
          </div>

          <div className="text-center space-y-4">
            <div className="text-sm text-muted-foreground">
              Remember your password?{" "}
              <Link
                to="/signin"
                className="text-primary hover:text-primary/80 transition-smooth font-medium"
              >
                Sign in here
              </Link>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-primary hover:text-primary/80 transition-smooth font-medium"
              >
                Sign up here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}