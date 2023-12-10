"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { NavDiv } from '../styled';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Navbar = () => {

  const { theme, setTheme } = useTheme();
  const [isMouseOver, setIsMouseOver] = useState(false);
  const pathname = usePathname();
  const [elevated, isElevated] = useState(false);

  useEffect(() => {

  }, [])

  const toggleThem = () => {
    if (theme == 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <NavDiv className='fixed z-10 left-1/2 w-[95vw] md:w-[60vw] translate-x-[-50%] mt-5 rounded-[.4rem] py-2 px-2 h-[3.5rem] flex items-center boxshadow-one' $theme={theme}>
      <div className='w-[100%] flex items-center justify-between h-[100%]'>
        <Link
          href={'/'}
          className='flex items-center justify-around px-3 rounded-[.4rem] h-[2.2rem] gap-1 md:gap-4 hover:text-black hover:bg-bg-primary cursor-pointer'
          onMouseEnter={() => setIsMouseOver(true)}
          onMouseLeave={() => setIsMouseOver(false)}
        >
          <Image
            src={isMouseOver ? '/static/face-emoji.png' : '/static/initials-icon.png'}
            width={20}
            height={20}
            alt='icon'
            style={{ transition: 'transform .5s ease-in-out' }}
          />
          <h1 className='font-bold flex items-center justify-center gap-1'>Afzal<span className='hidden md:flex'>Khan</span></h1>
        </Link>

        <div className='flex justify-around md:gap-2'>
          <div className='flex items-center'>
            <Link href={"/about"} className={`flex items-center px-3 rounded-[.4rem] h-[2.2rem] gap-4 hover:text-black hover:bg-bg-primary cursor-pointer ${pathname == '/about' ? "bg-bg-primary text-black" : "transparent"}`}>
              <h1>About</h1>
            </Link>
          </div>
          <div className='flex items-center justify-evenly'>
            <Link href={"/blog"} className={`flex items-center px-3 rounded-[.4rem] h-[2.2rem] gap-4 hover:text-black hover:bg-bg-primary cursor-pointer ${pathname == '/blog' ? "bg-bg-primary text-black" : "transparent"}`}>
              <h1>Blog</h1>
            </Link>
          </div>
          <div className='flex items-center justify-evenly'>
            <Link href={"/projects"} className={`flex items-center px-3 rounded-[.4rem] h-[2.2rem] gap-4 hover:text-black hover:bg-bg-primary cursor-pointer ${pathname == '/projects' ? "bg-bg-primary text-black" : "transparen"}`}>
              <h1>Projects</h1>
            </Link>
          </div>
          <div className='flex items-center justify-evenly' onClick={toggleThem}>
            <div className={`flex items-center px-3 rounded-[.4rem] h-[2.2rem] gap-4 hover:text-black hover:bg-bg-primary cursor-pointer ${pathname == '/projects' ? "bg-bg-primary text-black" : "transparent"}`}>
              {theme == "light" ? <ModeNightIcon /> : <WbSunnyIcon />}
            </div>

          </div>
        </div>
      </div>
    </NavDiv>
  )
}

export default Navbar