"use client"
import React from 'react'
import { Div } from '@/components/styled';
import { useTheme } from 'next-themes';

const page = () => {

  const { theme } = useTheme();

  return (
    <Div $theme={theme} className='w-[100vw] mx-auto min-h-screen'>
      sas
    </Div>
  )
}

export default page