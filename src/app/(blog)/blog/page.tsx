"use client"
import React from 'react'
import { Div } from '@/components/styled';
import { useTheme } from 'next-themes';

const BlogRootPage = () => {

  const { theme } = useTheme();

  return (
    <Div $theme={theme} className='w-[95vw] mx-auto md:w-[100vw] mx-auto min-h-screen overflow-x-hidden pb-56 '>
      <div className='relative top-[8rem] w-[100vw] md:w-[60vw] mx-auto'>
        No Posts to show!
      </div>
    </Div>
  )
}

export default BlogRootPage