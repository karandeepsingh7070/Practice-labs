'use client'

import { useEffect, useState } from "react"
import API from "@/lib/axios";

export const useConnectedToServer = () => {
    const [isLoading,setIsLoading] = useState(true)
    const [isConnected,setIsConnected] = useState(false)
    useEffect(() => {
        (async () => {
            let res = await API.get("/")
            if(res?.status == 200) {
                setIsConnected(true)
            }else  setIsConnected(false)
            setIsLoading(false)
        })()
    },[])

    return {isLoading,isConnected}
}