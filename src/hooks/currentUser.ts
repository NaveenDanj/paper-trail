"use client"
import { useEffect, useState } from 'react';
import { auth , db } from '@/firebase/config';
import { User } from '@/types/types';
import { doc, getDoc } from "firebase/firestore"; 

function useCurrentUser() {
  const [user, setUser] = useState<User | null >(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      const ref = doc(db , 'user' , user?.uid+'')
      const _user = (await getDoc(ref)).data() as User
      console.log("user => " , _user)
      setUser(_user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  return { user, isLoading };
}

export default useCurrentUser;
