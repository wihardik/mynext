'use client'
import { useState } from 'react'
import IconFallback from './IconFallback'

export default function FeatureCard({ feature }: { feature: { id: string; title: string; icon: string; description?: string; slug?: string } }) {
  const [imgError, setImgError] = useState(false)
  return (
    <div role="button" tabIndex={0} className="group flex cursor-pointer flex-col items-center gap-3 rounded-xl bg-white p-4 text-center shadow-sm transition hover:shadow-md">
      <div className="h-12 w-12">
        {!imgError ? (
          <img
            src={feature.icon}
            alt={feature.title}
            width={48}
            height={48}
            loading="lazy"
            onError={() => setImgError(true)}
            className="mx-auto h-12 w-12"
          />
        ) : (
          <IconFallback />
        )}
      </div>
      <h3 className="text-sm font-medium text-foreground">{feature.title}</h3>
      {feature.description && <p className="text-xs text-zinc-500">{feature.description}</p>}
    </div>
  )
}
