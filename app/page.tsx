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

export const metadata = {
    title: 'Tommy Saputra',
    description: 'A Front End Developer based in Australia.',
    twitter: {
        card: "summary_large_image",
        title: 'Tommy Saputra',
        description: 'A Front End Developer based in Australia.',
        images: ['https://tommysaputra.com/photo.jpeg'],
        creator: "@tompelsama",
    },
      icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    openGraph: {
        title: 'Tommy Saputra',
        description: 'A Front End Developer based in Australia.',
        url: 'https://tommysaputra.com',
        siteName: 'Tommy Saputra',
        images: [
          {
            url: 'https://tommysaputra.com/photo.jpeg',
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
                <h1 className="title">Imagination</h1>
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
