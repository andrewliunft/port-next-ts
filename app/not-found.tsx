import Link from "next/link";

export default function NotFound() {
    return (
        <div className="main">
            <div className="wrapper">
                <div className="notfound content">
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    
                    <Link href="/">
                        <button>Back to home page</button>    
                    </Link>
                </div>
            </div>
        </div>  
    );
}