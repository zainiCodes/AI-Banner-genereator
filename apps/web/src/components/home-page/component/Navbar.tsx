import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Zap } from "lucide-react";
import * as React from "react";

import { Button } from "@my-better-t-app/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@my-better-t-app/ui/components/sheet";
import { cn } from "@my-better-t-app/ui/lib/utils";

import UserMenu from "../../user-menu";

const links = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/ai", label: "AI Chat" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full bg-transparent">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        {/* Logo Side */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <Zap className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold tracking-tight">AI Gen</span>
          </Link>
        </div>

        {/* Center Links (Desktop) */}
        <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
          {links.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Action Side */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <UserMenu />
          </div>

          {/* Mobile Menu (Sheet) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-background/80 backdrop-blur-xl">
              <SheetHeader className="mb-8 items-start text-left">
                <SheetTitle className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Zap className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-semibold tracking-tight">AI Gen</span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-4">
                {links.map(({ to, label }) => {
                  const isActive = location.pathname === to;
                  return (
                    <Link
                      key={to}
                      to={to}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/5",
                        isActive ? "bg-white/10 text-primary" : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:hidden">
                <UserMenu />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
