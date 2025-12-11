export type Feature = {
  id: string
  title: string
  icon: string
  description?: string
  slug?: string
}

export const features: Feature[] = [
  { id: 'presentation', title: 'Presentation', icon: '/icons/presentation.svg', slug: 'presentation' },
  { id: 'website', title: 'Website', icon: '/icons/website.svg', slug: 'website' },
  { id: 'podcast', title: 'Podcast', icon: '/icons/podcast.svg', slug: 'podcast' },
  { id: 'video', title: 'Video', icon: '/icons/video.svg', slug: 'video' },
  { id: 'connector', title: 'Connector', icon: '/icons/connector.svg', slug: 'connector' },
  { id: 'report', title: 'Report', icon: '/icons/report.svg', slug: 'report' },
  { id: 'document', title: 'Document', icon: '/icons/document.svg', slug: 'document' },
  { id: 'image', title: 'Image', icon: '/icons/image.svg', slug: 'image' },
  { id: 'browser', title: 'Browser', icon: '/icons/browser.svg', slug: 'browser' },
]

export default features
