import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function LoginForm({ className, ...props }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-4 p-6 rounded-lg shadow-xs bg-white">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-xl font-semibold">Welcome back</h2>
          <p className="text-gray-500 text-sm">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6">
            {/* Email field */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="yourname@company.com"
                className="pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40"
                required
              />
            </div>

            {/* Password field */}
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="/forgot-password"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="pl-3 pr-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40"
                required
              />
            </div>

            {/* Login button */}
            <Button
              type="submit"
              className="w-full hover:bg-blue-700 transition text-white cursor-pointer"
            >
              Login
            </Button>

            {/* Sign up link */}
            <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
