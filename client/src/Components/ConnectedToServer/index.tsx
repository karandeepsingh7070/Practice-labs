'use client'
import { useEffect } from "react"
import { toast, Toaster } from "sonner"
import { useConnectedToServer } from "@/hooks/useConnectedToServer";
import { Roboto } from "next/font/google";

const RobotoBold = Roboto({
  weight: "700",
  subsets: ["latin"],
});
const ToastPopup = () => {
  
  let {isLoading, isConnected} = useConnectedToServer()
    useEffect(() => {
      if(!isLoading) {
        toast(isConnected ? "Connected To Practice Labs Server" : "Unable to connect with server")
      }
    },[isLoading])
  return (<>
    <Toaster className={`${RobotoBold.className}`} />
  </>)
}

export default ToastPopup