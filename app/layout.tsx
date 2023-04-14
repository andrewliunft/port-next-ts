import './globals.scss'
import Navbar from '@/components/Navbar'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

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
