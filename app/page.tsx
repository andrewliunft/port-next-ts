import './home.scss'
import Experience from '@/components/home/Experience'
import ValueComponent from '@/components/home/Value'
import AboutComponent from '@/components/home/About'
import CompaniesComponent from '@/components/home/Companies'
import Skillset from '@/components/home/Skillset'
import Projects from '@/components/home/Projects'
import Socials from '@/components/home/Socials'
import { companies } from '@/lib/companies'
import { skills } from '@/lib/skills'
import { projects } from '@/lib/projects'
import { siteConfig } from '@/config/site'

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

export default function Home() {
    return (
        <main>
            <div className='canvas-wrapper'>
                <h1 className="title-experience">Imagination</h1>
                <Experience />
            </div>

            <div className="wrapper content">
                
                <ValueComponent />

                <AboutComponent />

                <CompaniesComponent companies={companies} title={'Work Experience'} />

                <Skillset skills={skills} title={'Skillset'} />

                <Projects projects={projects} title={'My Projects'} />

                <Socials />

            </div>
            
        </main>
    )
}
