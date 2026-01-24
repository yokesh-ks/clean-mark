'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Copy,
  Check,
  Download,
  Code2,
  Eye,
  FileText,
  ExternalLink,
  Clock,
  Hash,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface MarkdownResultProps {
  result: string;
  sourceUrl: string;
}

export const MarkdownResult = ({ result, sourceUrl }: MarkdownResultProps) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('preview');

  if (!result) return null;

  const wordCount = result.split(/\s+/).filter(Boolean).length;
  const charCount = result.length;
  const lineCount = result.split('\n').length;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silently fail
    }
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="animate-slide-up max-w-4xl mx-auto border-border/50 shadow-lg overflow-hidden">
          {/* Header */}
          <CardHeader className="border-b border-border bg-muted/30 px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground">Converted Markdown</h2>
                  <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    {new URL(sourceUrl).hostname}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Badge variant="secondary" className="gap-1">
                  <Hash className="h-3 w-3" />
                  {wordCount.toLocaleString()} words
                </Badge>
                <Badge variant="secondary" className="gap-1 hidden sm:flex">
                  <Clock className="h-3 w-3" />
                  {Math.ceil(wordCount / 200)} min read
                </Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Tab Controls */}
              <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-muted/20">
                <TabsList className="h-9 bg-muted/50">
                  <TabsTrigger value="preview" className="gap-1.5 text-xs sm:text-sm">
                    <Eye className="h-3.5 w-3.5" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="raw" className="gap-1.5 text-xs sm:text-sm">
                    <Code2 className="h-3.5 w-3.5" />
                    Raw
                  </TabsTrigger>
                </TabsList>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handleCopy} className="gap-1.5">
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-success" />
                        <span className="hidden sm:inline">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleDownload} className="gap-1.5">
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <TabsContent value="preview" className="m-0">
                <div className="markdown-preview p-6 max-h-[600px] overflow-y-auto scrollbar-thin">
                  <ReactMarkdown>{result}</ReactMarkdown>
                </div>
              </TabsContent>

              <TabsContent value="raw" className="m-0">
                <div className="relative">
                  <pre className="p-6 max-h-[600px] overflow-auto scrollbar-thin bg-muted/30 font-mono text-sm leading-relaxed text-foreground">
                    <code>{result}</code>
                  </pre>
                  <div className="absolute bottom-4 right-4 text-xs text-muted-foreground">
                    {lineCount} lines · {charCount.toLocaleString()} chars
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};