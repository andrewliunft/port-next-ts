import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

// Sign out button
export default function SignOutButton() {

    const signOutUser = async () => {
        await signOut(auth)
        .then(() => {
            console.log("User signed out");
        })
        .catch((error) => {
            console.error("There was an error signing out");
        });
    };
  
    return <button onClick={signOutUser}>Sign Out</button>;
}