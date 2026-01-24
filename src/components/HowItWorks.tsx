"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Link, Cpu, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Paste URL",
    description: "Enter any webpage URL you want to convert to Markdown format.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Process",
    description:
      "Our engine fetches and intelligently extracts the main content.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Get Markdown",
    description: "Receive clean, structured Markdown ready for your use case.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to transform any webpage into clean, usable
            Markdown.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-border/50 bg-card/50 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {/* Step Number & Icon */}
                    <div className="relative mb-4">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                        <step.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-3">
                    <ArrowRight className="h-5 w-5 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
