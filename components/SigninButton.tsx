import { auth, googleAuthProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";

// Sign in with Google button
export default function SignInButton() {
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleAuthProvider)
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <Image 
                src={'/images/icons/google.svg'}
                width={20}
                height={20}
                alt="Google"
            /> Sign in with Google
        </button>
    );
}