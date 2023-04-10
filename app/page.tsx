import './home.scss'
import AboutComponent from '@/components/home/About'
import Experience from '@/components/home/Experience'
import CompaniesComponent from '@/components/home/Companies'
import Skillset from '@/components/home/Skillset'
import Projects from '@/components/home/Projects'
import { companies } from '@/lib/companies'
import { skills } from '@/lib/skills'
import { projects } from '@/lib/projects'
import Socials from '@/components/home/Socials'

export default function Home() {
    return (
        <main>
            <div className='canvas-wrapper'>
                <h1 className="title">Imagination</h1>
                <Experience />
            </div>

            <div className="wrapper content">
                <div className="my-values">
                    <h2 className="subtitle subtitle--xl">Philosophy & values</h2>
                    <p className="paragraph paragraph--big">Imagination is a crucial tool for understanding the experiences of others and developing compassion and empathy.</p>
                    <p className="paragraph paragraph--big">In addition, it is a fundamental aspect of human cognition that plays an important role in our ability to learn, innovate, and adapt to new situations.</p>
                </div>

                <AboutComponent />

                <CompaniesComponent companies={companies} title={'Work Experience'} />

                <Skillset skills={skills} title={'Skillset'} />

                <Projects projects={projects} title={'My Projects'} />

                <Socials />

            </div>
            
        </main>
    )
}
