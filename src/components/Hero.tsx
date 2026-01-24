'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Globe, Loader2, Sparkles } from 'lucide-react';

interface HeroProps {
  onConvert: (url: string) => void;
  isLoading: boolean;
}

export const Hero = ({ onConvert, isLoading }: HeroProps) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onConvert(url.trim());
    }
  };

  const exampleUrls = [
    {
      label: 'StackOverflow',
      url: 'https://stackoverflow.com/questions/79873503/pgadmin-wont-answer-correctly',
    },
    { label: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Markdown' },
    {
      label: 'MDN',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
  ];

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-12 md:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/60 animate-pulse-subtle" />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-accent/50 animate-pulse-subtle delay-300" />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-pulse-subtle delay-700" />
      <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/60 animate-pulse-subtle delay-500" />

      {/* Code snippets decoration */}
      <div className="absolute top-24 left-8 hidden lg:block opacity-20 font-mono text-xs text-muted-foreground">
        {'[ .JSON ]'}
      </div>
      <div className="absolute top-32 right-12 hidden lg:block opacity-20 font-mono text-xs text-muted-foreground">
        {'[ .MD ]'}
      </div>
      <div className="absolute bottom-40 left-16 hidden lg:block opacity-20 font-mono text-xs text-muted-foreground">
        {'< HTML />'}
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              LLM-Ready Content
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Turn any website into <span className="text-gradient-primary">clean Markdown</span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-slide-up text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
            style={{ animationDelay: '0.1s' }}
          >
            Extract noise-free, structured content from any URL. Perfect for AI training,
            documentation, and content analysis.
          </p>

          {/* Search/Convert Form */}
          <Card
            className="animate-slide-up w-full max-w-2xl p-2 shadow-lg border-border/50 bg-card/80 backdrop-blur-sm"
            style={{ animationDelay: '0.2s' }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com/article"
                  className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-border bg-background text-foreground font-mono text-sm md:text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  required
                  disabled={isLoading}
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="sm:w-auto w-full"
                disabled={isLoading || !url.trim()}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Converting...
                  </>
                ) : (
                  <>
                    Convert
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Example URLs */}
          <div
            className="animate-fade-in mt-6 flex flex-wrap items-center justify-center gap-2 text-sm"
            style={{ animationDelay: '0.3s' }}
          >
            <span className="text-muted-foreground">Try:</span>
            {exampleUrls.map((example, index) => (
              <button
                key={index}
                onClick={() => setUrl(example.url)}
                className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:border-primary/30 transition-all duration-200"
                disabled={isLoading}
              >
                {example.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
