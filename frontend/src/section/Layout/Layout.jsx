// src/components/Layout.jsx
import Header from "../../components/Header/Header";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
export default function Layout({ children }) {
  return (
    <div className="h-screen w-full bg-[var(--primary-bg-color)]">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <main className="flex-1 mt-14 p-6 overflow-y-auto">{children}</main>

        <RightSidebar />
      </div>
    </div>
  );
}
