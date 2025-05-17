import SignInCta from '@/Components/SignInCta'
import React from 'react'

const Masthead = () => {
  return (
    <div className='navigation-wrapper border-b-1 h-16 flex items-center ml-20 mr-20 justify-between mt-4'>
      <div><h3 className='text-2xl/4'>Practice Labs </h3><span className='text-[10px]'>Powered by codescoop</span></div>
        <SignInCta />
    </div>
  )
}

export default Masthead