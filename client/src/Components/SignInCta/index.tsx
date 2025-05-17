'use client'
import { useUserState } from '@/store/useUserStore';
import { Button } from "@/components/ui/button"
import { Roboto } from "next/font/google";

const RobotoBold = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const SignInCta = () => {
  const { isLoggedIn, setLoggedIn } = useUserState();
  return (<>
  {isLoggedIn ? <div>User LoggedIn</div> : <Button className={`rounded-sm ${RobotoBold.className}`} variant="outline">Log in</Button>}
  </>)
}

export default SignInCta