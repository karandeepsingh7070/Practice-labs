'use client'
import LoginForm from '@/Components/Login'
import SignInCta from '@/Components/SignInCta'
import { useToggleLoginForm } from '@/store/useToggleLoginForm'
import React from 'react'

const Masthead = () => {
  const {isModalOpen,setIsModalOpen} = useToggleLoginForm()
  return (<>
  {isModalOpen ? <LoginForm setIsModalOpen={setIsModalOpen} /> : null}
    <div className='navigation-wrapper border-b-1 h-16 flex items-center ml-20 mr-20 justify-between mt-4'>
      <div><h3 className='text-2xl/4'>Practice Labs </h3><span className='text-[10px]'>Powered by codescoop</span></div>
        <SignInCta setIsModalOpen={setIsModalOpen} />
    </div>
  </>)
}

export default Masthead