'use client'

import { Question } from '@/modals'
import { useEffect, useState } from 'react'
import API from "@/lib/axios";

const useFetchProblems = () => {

    const [problems,setProblems] = useState<Question[]>([])

    useEffect(() => {
        (async () => {
            let res = await API.get('/api/problems')
            setProblems(res.data)
        })()
    },[])

    return {problems}
}

export default useFetchProblems