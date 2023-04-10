import Image from "next/image";

interface Props {
    skills: object[];
    title: string;
}

export default function Skillset({ skills = [], title = "Work Experience" }: Props) {

    return (
        <div className="skills-section">
            <div className="skills-desc">
                <h2 className="subtitle">{title}</h2>
                <p>I possess both technical and non-technical skills, making me the ideal candidate to consider for a comprehensive project. I am confident in my ability to tackle any challenge and meet your specific needs, regardless of what they may be.</p>
            </div>
           
            <ul className="skills">
                { skills.map(({id, name, description, icon}: any) => 
                    <li className="skill-wrapper" key={ id }>
                        <div className="skill-icon">
                            <Image 
                                src={icon}
                                width={60}
                                height={60}
                                alt={name}
                                className="skill-icon-style"
                            />
                        </div>
                        <div className="skill-desc">
                            <p className="skill-desc-name">{name}</p>
                            <p className="skill-desc-blurb">{description}</p>
                        </div>
                    </li>
                ) }
            </ul>
        </div>
    )
}
