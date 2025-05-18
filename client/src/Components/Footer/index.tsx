import React from 'react'
import { Button } from '../ui/button'

const Footer = () => {
    const data = new Date()
  return (<>
    <div className='flex flex-col items-center gap-[0.7rem] h-[200px] p-[2rem] border-t-1 ml-10 mr-10 lg:ml-20 lg:mr-20 mb-4'>
        <h3 className='text-[12px] text-[#EFEEEA]'>UPSKILL FOR A BETTER FUTURE</h3>
        <h1 className='text-[24px]'>Request Learning Path</h1>
        <h3 className='text-[14px]'>Practice Labs, PL is a platform for learning coding which is developed by CodeScoop Labs.</h3>
        <Button className='mt-4' variant='outline'>Connect</Button>
        <h3 className='text-[10px]'>{`© ${data.getFullYear()} Practice Labs`}</h3>
    </div>
  </>)
}

export default Footer