'use client'
// import LoginForm from '@/Components/Login'
import SignInCta from '@/Components/SignInCta'
// import { useToggleLoginForm } from '@/store/useToggleLoginForm'
import { useUserState } from '@/store/useUserStore'
import React from 'react'
import { NavigationItems } from './Navigation'

const Masthead = () => {
  // const {isModalOpen,setIsModalOpen} = useToggleLoginForm()
  const { isLoggedIn } = useUserState();
  return (<>
  {/* {isModalOpen ? <LoginForm setIsModalOpen={setIsModalOpen} /> : null} */}
    <div className='navigation-wrapper border-b-1 h-16 flex items-center ml-10 mr-10 lg:ml-20 lg:mr-20 justify-between mt-4'>
      <div><h3 className='text-2xl/4 bg-gradient-to-r from-purple-500 to-[#FE7743] bg-clip-text text-transparent'>Practice Labs </h3><span className='text-[10px]'>Powered by codescoop</span></div>
        {isLoggedIn ? <div className='flex gap-5 text-sm cursor-pointer'><NavigationItems /></div> : null}
        <SignInCta />
    </div>
  </>)
}

export default Masthead