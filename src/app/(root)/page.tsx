"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import { Div } from '@/components/styled';
import Navbar from '@/components/Navbar/Navbar';

const page = () => {

  const { theme } = useTheme();


  return (
    <Div $theme={"light"} className='w-[100vw] min-h-screen'>
      
    </Div>
  )
}

export default page