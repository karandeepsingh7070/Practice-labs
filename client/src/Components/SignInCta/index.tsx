'use client'
import { useUserState } from '@/store/useUserStore';
import { Button } from "@/components/ui/button"
import { Roboto } from "next/font/google";
import { modalState } from '@/modals';
import { useEffect } from 'react';
import { getCookies } from '@/helper';

const RobotoBold = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const SignInCta = ({setIsModalOpen}: modalState) => {
  const { isLoggedIn, setLoggedIn } = useUserState();

  useEffect(() => {
    let token = getCookies({key: 'token'})
    if(token) setLoggedIn(true)
  },[])
  return (<>
  {isLoggedIn ? <div>User LoggedIn</div> : <Button className={`rounded-sm ${RobotoBold.className}`} variant="outline" onClick={() => setIsModalOpen(true)}>Log in</Button>}
  </>)
}

export default SignInCta