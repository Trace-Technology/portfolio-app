"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Package, Users, LogOut } from "lucide-react";
import { cn } from "@/lib/cn";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [basePath, setBasePath] = useState("/admin");

  useEffect(() => {
    // Use the browser URL to get the actual slug-based path
    const slug = window.location.pathname.split("/")[1];
    setBasePath(`/${slug}`);
  }, []);

  // Login page doesn't need the layout
  if (pathname === "/admin") {
    return <>{children}</>;
  }

  const navItems = [
    { href: `${basePath}/orders`, label: "Orders", icon: Package },
    { href: `${basePath}/admins`, label: "Admins", icon: Users },
  ];

  const handleLogout = async () => {
    await fetch("/api/admin/auth/logout", { method: "POST" });
    router.push(basePath);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-navy-950/50 p-4 hidden md:block">
        <div className="mb-8 px-3">
          <h2 className="text-lg font-bold text-white">Admin Panel</h2>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                pathname.endsWith(item.href.split("/").pop() || "")
                  ? "bg-accent-blue/10 text-accent-blue"
                  : "text-navy-400 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5 mt-8">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-navy-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/5 bg-navy-950 px-4 py-2 flex justify-around">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium transition-colors",
              pathname.endsWith(item.href.split("/").pop() || "")
                ? "text-accent-blue"
                : "text-navy-400"
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium text-navy-400"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 pb-24 md:pb-6 overflow-auto">{children}</main>
    </div>
  );
}
