import Image from 'next/image';
import Link from 'next/link';

type NavProps = {
    
};

// Top navbar
export default function Navbar({ }: NavProps) {

    return (
        <header>
            <div className="wrapper">
                <nav className="navbar">
                    <div className="logo">
                        <Link href="/">
                            <Image 
                                src={'/images/logo.svg'}
                                width={60}
                                height={60}
                                alt="Tommy Saputra Logo"
                                priority
                            />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link href="/nfts">
                                <button>NFT Viewer</button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
