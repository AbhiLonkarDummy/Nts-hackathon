import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export function SignUpForm({ className, ...props }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="shadow-none border-0">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-semibold">
            Create your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="pl-3 pr-3 py-2 bg-gray-50 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40"
                required
              />
            </div>

            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="pl-3 pr-3 py-2 bg-gray-50 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40"
                required
              />
            </div>

            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="pl-3 pr-3 py-2 bg-gray-50 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <input
                id="confirm-password"
                type="password"
                placeholder="********"
                className="pl-3 pr-3 py-2 bg-gray-50 rounded-md text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary-color)]/40"
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full hover:bg-blue-700 transition text-white cursor-pointer"
            >
              Sign Up
            </Button>

            {/* Login Link */}
            <div className="text-center text-sm">
              Already have an account?{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
                href="#"
                className="underline underline-offset-4 cursor-pointer"
              >
                Log in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Terms */}
      <div className="text-center text-xs text-gray-500">
        By signing up, you agree to our{" "}
        <a
          href="#"
          className="underline underline-offset-4 hover:text-[var(--brand-primary-color)]"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="underline underline-offset-4 hover:text-[var(--brand-primary-color)]"
        >
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
