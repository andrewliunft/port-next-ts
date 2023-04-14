import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
    name: "Tommy Saputra",
    description:
        "A Front End Developer based in Australia.",
    url: process.env.NEXT_PUBLIC_APP_URL,
    ogImage: "https://tommysaputra.com/photo.jpeg",
    links: {
        twitter: "https://twitter.com/tompelsama",
        github: "https://github.com/tompelsama",
    },
}
