'use client';

import { ThemeToggle } from '@/components/ThemeToggle';
import { FileText, Github, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
            <FileText className="h-5 w-5 text-primary-foreground" />
            <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-50" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Clean<span className="text-gradient-primary">Mark</span>
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Features
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            API
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Docs
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
          <Button variant="default" size="sm" className="hidden sm:flex gap-1.5">
            <Zap className="h-4 w-4" />
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};
