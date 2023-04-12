'use client';

import { useUserContext } from "@/components/Context";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavProps = {
    
};

// Top navbar
export default function Navbar({ }: NavProps) {
    const { user, username } = useUserContext()
    const pathname = usePathname()

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
                            <Link href="/sharehub">
                                <button>Sharehub</button>
                            </Link>
                        </li>
                        
                        {/* user is signed-in and has username */}
                        {(username && pathname !== '/') && (
                        <>
                            <li>
                            <Link href="/sharehub/admin">
                                <button>Write Posts</button>
                            </Link>
                            </li>
                            <li>
                            <Link href={`/${username}`}>
                                {/* <img src={user?.photoURL} /> */}
                            </Link>
                            </li>
                        </>
                        )}

                        {/* user is not signed OR has not created username */}
                        {(!username && pathname !== '/') && (
                        <li>
                            <Link href="/sharehub/login">
                                <button>Log in</button>
                            </Link>
                        </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
