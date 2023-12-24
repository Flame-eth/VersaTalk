"use client"
import { auth } from '@/firebase';
import { signInWithCustomToken } from 'firebase/auth';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'


async function syncFirebaseAuth(session: Session) {
    if(session && session.firebaseToken) {
        try {
            await signInWithCustomToken( auth, session.firebaseToken);
        } catch (error) {
            console.error("Firebase auth error", error);
            
        }
    }
    
}
function FirebaseAuthProvider(
    {children}: {children: React.ReactNode}
) {

    const {data: session} = useSession();

    useEffect(() => {
        if (!session) return;
       


    }, [session])
  return (
   <>
   {children}
   </>
  )
}

export default FirebaseAuthProvider 