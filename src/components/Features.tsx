'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, FileCode, Link2, Sparkles, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Convert any URL to clean Markdown in seconds with our optimized processing engine.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Shield,
    title: 'Noise-Free Output',
    description:
      'Automatically removes ads, navigation, scripts, and other clutter for pristine content.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: FileCode,
    title: 'LLM Optimized',
    description:
      'Structured output perfect for AI training, RAG systems, and language model processing.',
    color: 'text-success',
    bgColor: 'bg-success/10',
  },
  {
    icon: Link2,
    title: 'Link Preservation',
    description:
      'Keep important links intact while converting content to maintain reference integrity.',
    color: 'text-chart-4',
    bgColor: 'bg-chart-4/10',
  },
  {
    icon: Sparkles,
    title: 'Smart Formatting',
    description:
      'Intelligent detection and preservation of headings, lists, code blocks, and tables.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Clock,
    title: 'Instant Preview',
    description: 'See both raw Markdown and rendered preview side-by-side for quick verification.',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
];

export const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why CleanMark?</h2>
          <p className="text-lg text-muted-foreground">
            Purpose-built for developers, researchers, and AI enthusiasts who need clean, structured
            content from any web source.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-border/50 bg-card/50 hover:bg-card hover:shadow-md hover:border-border transition-all duration-300"
            >
              <CardContent className="p-6">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bgColor} mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
