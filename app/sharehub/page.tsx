import LoginComponent from "@/components/Login";

export default function SharehubPage({ }) {
    

    // 1. user signed out <SignInButton />
    // 2. user signed in, but missing username <UsernameForm />
    // 3. user signed in, has username <SignOutButton />
    return (
        <main className="main">
            <div className="wrapper">
                <LoginComponent />
            </div>
        </main>
    );
}
