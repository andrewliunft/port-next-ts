import Image from "next/image";
import Link from "next/link";

export default function Socials({ }) {

    return (
        <div className="socials-section">
            <div className="socials-desc">
                <h2 className="subtitle">Let’s talk</h2>
                <p>Now that you know a lot about me, let me know if you are interested to work with me.</p>
            </div>
            <ul className="socials-links">
                <li className="social-link">
                    <Link 
                        href={'mailto:contact@tommysaputra.com'}
                        target="_blank"
                    >
                        <Image 
                            src={'/images/icons/email.svg'}
                            width={50}
                            height={50}
                            alt="Linkedin"
                        />
                    </Link>
                </li>
                <li className="social-link">
                    <Link 
                        href={'https://www.linkedin.com/in/tommy-saputra-208a64103/'}
                        target="_blank"
                    >
                        <Image 
                            src={'/images/icons/linkedin.svg'}
                            width={50}
                            height={50}
                            alt="Linkedin"
                        />
                    </Link>
                </li>
                <li className="social-link">
                    <Link 
                        href={'https://github.com/tompelsama'}
                        target="_blank"
                    >
                        <Image 
                            src={'/images/icons/github.svg'}
                            width={50}
                            height={50}
                            alt="Github"
                        />
                    </Link>
                </li>
                <li className="social-link">
                    <Link 
                        href={'https://www.instagram.com/tompelsama/'}
                        target="_blank"
                    >
                        <Image 
                            src={'/images/icons/ig.svg'}
                            width={50}
                            height={50}
                            alt="Instagram"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
