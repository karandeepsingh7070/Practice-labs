import { loginRes } from './../modals';
'use client'

import API from "@/lib/axios"
import { loginModal } from "@/modals"

export const loginUser = async (formData: loginModal) => {
    let { name, email } = formData
    let res: loginRes = await API.post("/login", {
        name, 
        email
    })
    return {token: res.data.token}
}
