"use client"

import { useUserContext } from "./Context"
import SignInButton from "./SigninButton"
import SignOutButton from "./SignoutButton"
import UsernameForm from "./UsernameForm"

export default function LoginComponent({ })
{
    const { user, username } = useUserContext()

    return <>
        {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
    </>
}