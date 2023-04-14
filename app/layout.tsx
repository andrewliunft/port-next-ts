import './globals.scss'
import Navbar from '@/components/Navbar'
import { siteConfig } from '@/config/site'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@tompelsama",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: 'https://tommysaputra.com',
        siteName: siteConfig.name,
        images: [
          {
            url: siteConfig.ogImage,
            width: 1065,
            height: 710,
          },
        ],
        locale: 'en-AU',
        type: 'website',
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en" className={poppins.variable}>
            <body>
                <Navbar />
                {children}

                <div className="smooth-trans"></div>
                <footer className="footer">
                    <div className="ocean">
                        <div className="wave"></div>
                        <div className="wave"></div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
