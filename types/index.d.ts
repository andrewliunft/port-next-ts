export type SiteConfig = {
    name: string
    description: string
    url: string | undefined
    ogImage: string
    links: {
      twitter: string
      github: string
    }
}