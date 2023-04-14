import WalletComponent from "@/components/Wallet";
import { siteConfig } from '@/config/site'
import './nfts.scss'

export const metadata = {
    title: 'NFT Viewer',
    description: 'NFT Viewer app to show your collection.',
    twitter: {
        card: "summary_large_image",
        title: `NFT Viewer | ${siteConfig.name}`,
        description: 'NFT Viewer app to show your collection.',
        images: [siteConfig.ogImage],
        creator: "@tompelsama",
    },
    openGraph: {
        title: `NFT Viewer | ${siteConfig.name}`,
        description: 'NFT Viewer app to show your collection.',
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
}

export default function Page({ }) {

    return (
        <main className="main">
            <div className="wrapper content">
                <h1 className="title">NFT Viewer</h1>
                <WalletComponent />
            </div>
        </main>
    );
}