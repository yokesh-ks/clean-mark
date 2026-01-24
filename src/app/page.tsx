'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { MarkdownResult } from '@/components/MarkdownResult';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT!;

export default function Home() {
  const [markdownResult, setMarkdownResult] = useState<string | null>(null);
  const [sourceUrl, setSourceUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async (url: string) => {
    setIsLoading(true);
    setMarkdownResult(null);
    setSourceUrl(url);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: url,
          title: true,
          links: true,
          clean: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      setMarkdownResult(data);
      toast.success('URL converted successfully!');

      // Scroll to result
      setTimeout(() => {
        document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Conversion error:', error);
      toast.error('Failed to convert URL. Please check the URL and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onConvert={handleConvert} isLoading={isLoading} />

        {markdownResult && (
          <div id="result">
            <MarkdownResult result={markdownResult} sourceUrl={sourceUrl} />
          </div>
        )}

        <HowItWorks />
        <Features />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
