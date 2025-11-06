import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import DocLayout from '@/components/DocLayout';

interface Props { params: { slug: string } }

export default function DocPage({ params }: Props) {
  const { slug } = params;
  const docsPath = path.join(process.cwd(), 'src', 'content', 'docs');
  const file = path.join(docsPath, `${slug}.md`);
  let content = '';
  try { content = fs.readFileSync(file, 'utf-8'); } catch (e) { content = '# Not found\n\nDocument not found.' }

  return (
    <DocLayout>
      <article className="prose prose-zinc max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
    </DocLayout>
  );
}

export async function generateStaticParams() {
  const docsPath = path.join(process.cwd(), 'src', 'content', 'docs');
  try {
    const files = fs.readdirSync(docsPath).filter((f) => f.endsWith('.md'));
    return files.map((f) => ({ slug: f.replace(/\.md$/, '') }));
  } catch (e) {
    return [];
  }
}
