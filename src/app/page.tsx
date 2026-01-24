import { Hero } from '@/app/_sections/00-hero';
import { MarkdownResult } from '@/app/_sections/01-markdown-result';
import { Features } from '@/app/_sections/03-features';
import { HowItWorks } from '@/app/_sections/02-how-it-works';
import { AutoScroll } from '@/components/auto-scroll';

const API_ENDPOINT = process.env.API_ENDPOINT!;

interface PageProps {
  searchParams: Promise<{ url?: string }>;
}

async function convertUrl(url: string): Promise<{ markdown: string | null; error: string | null }> {

  console.log('Converting URL:', url, ",,,");
  console.log('Using API endpoint:', API_ENDPOINT);
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'User-Agent': 'PostmanRuntime/7.51.0',
        'Cache-Control': 'no-cache',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
      },
      body: JSON.stringify({
        url: url,
        title: true,
        links: true,
        clean: true,
      }),
      cache: 'no-store',
    });

    console.log('API response status:', response);

    if (!response.ok) {
      return { markdown: null, error: `Failed to convert URL (status: ${response.status})` };
    }

    const data = await response.text();
    return { markdown: data, error: null };
  } catch (error) {
    console.error('Conversion error:', error);
    return { markdown: null, error: 'Failed to convert URL. Please check the URL and try again.' };
  }
}

export default async function Home({ searchParams }: PageProps) {
  const { url } = await searchParams;

  console.log('Received URL parameter:', url);

  let markdownResult: string | null = null;
  let errorMessage: string | null = null;

  if (url) {
    const result = await convertUrl(url);
    console.log('Conversion result:', result);
    markdownResult = result.markdown;
    errorMessage = result.error;
  }

  return (
    <div className="bg-background">
      <Hero initialUrl={url} error={errorMessage} />

      {markdownResult && (
        <>
          <AutoScroll targetId="result" />
          <div id="result">
            <MarkdownResult result={markdownResult} sourceUrl={url!} />
          </div>
        </>
      )}

      <HowItWorks />
      <Features />
    </div>
  );
}
