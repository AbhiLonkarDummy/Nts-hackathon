// src/components/Sidebar.jsx
import './LeftSidebar.css'
import {
  Home,
  Bot,
  BarChart3,
  BookOpen,
  MessageSquare,
  Settings,
} from "lucide-react";

export default function LeftSidebar() {
  // Sidebar navigation items
  const navItems = [
    { href: "/mentor", label: "Mentor", icon: Bot },
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/progress", label: "Progress", icon: BarChart3 },
    { href: "/plans", label: "Plans", icon: BookOpen },
    { href: "/communication", label: "Coach", icon: MessageSquare },
    { href: "/dsa", label: "DSA", icon: BookOpen },
    { href: "/setting", label: "Setting", icon: Settings },
  ];

  return (
    <aside className="w-24 bg-[var(--primary-bg-color)] border-r border-[var(--primary-border-color)] h-[calc(100vh-56px)] fixed top-18 left-0 flex flex-col justify-between">
      {/* Top nav */}
      <div>
        <nav className="flex flex-col items-center pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="w-full flex flex-col items-center gap-1 px-4 py-3 sidebar-icon hover:bg-[#F5EEE5] transition-colors duration-200"
            >
              <item.icon className="w-6 h-6 sidebar-icon" />
              <span className="text-sm font-medium text-center sidebar-icon">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
