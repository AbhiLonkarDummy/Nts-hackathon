// src/components/Header.jsx
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="h-18 py-1 bg-[var(--primary-bg-color)] border-b border-[var(--primary-border-color)] flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="Logo.svg" alt="Logo" className="w-32 h-auto" />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="w-6 h-6" />
        </Button>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
}
