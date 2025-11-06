import React from 'react';

export default function DocLayout({ children }: { children: React.ReactNode }){
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {children}
    </div>
  )
}
