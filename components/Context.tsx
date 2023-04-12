'use client';

import { auth, firestore } from '@/lib/firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const UserContext = createContext({ user: null, username: null })

export const UserContextProvider = ({ children }: any) => {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState<any>(null);

    useEffect(() => {
        // turn off realtime subscription
        let unsubscribe;

        if (user) 
        {
            const ref = doc(firestore, 'users', user.uid)

            unsubscribe = onSnapshot(ref, (doc) => {
                setUsername(doc.data()?.username);
            });
        } 
        else 
        {
          setUsername(null);
        }
    
        return unsubscribe;
    }, [user]);

    console.log(user, username)

    return (
        <UserContext.Provider value={{ user, username }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () => useContext(UserContext);