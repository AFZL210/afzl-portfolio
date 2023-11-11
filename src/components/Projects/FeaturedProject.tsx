import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from 'next-themes';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import Link from 'next/link';

interface FeaturedProjectI {
  demoUrl: string,
  githubUrl: string,
  subHeading: string,
  heading: string,
  description: string,
  tech: string[],
  video: string
}

const FeaturedProject = (props: FeaturedProjectI) => {

  const { theme } = useTheme();

  return (
    <div className='flex flex-col w-[100%] items-start'>
      <span className='text-[#a29a59]'>{props.subHeading}</span>
      <h1 className='font-bold text-xl'>{props.heading}</h1>
      <div className={`mt-2 w-[100%] h-[32rem] flex bg-${theme == "light" ? "transparent" : "[#131c2f]"} flex-col boxshadow-one px-3 rounded-md gap-4 items-center justify-center`}>
        <div className='w-[90%] mx-auto h-[20rem]'>
          <video autoPlay src={props.video} className='w-[100%] h-[100%]' />
        </div>
        <span>{props.description}</span>
        <div className='w-[100%] flex items-center justify-around'>
          <Link href={props.githubUrl} target='_blank' className='w-[45%] py-1 flex items-center justify-center'>
            <div className={`w-[100%] py-1 rounded-[.8rem] cursor-pointer flex items-center justify-center gap-2 border border-${theme == "light" ? "black" : "light"}`}>
              <GitHubIcon />
              <span>GitHub</span>
            </div>
          </Link>

          <Link href={props.demoUrl} target='_blank' className='w-[45%] py-1 flex items-center justify-center'>
            <div className={`w-[100%] py-1 rounded-[.8rem] cursor-pointer flex items-center justify-center gap-2 border border-${theme == "light" ? "black" : "light"}`}>
              <OpenInBrowserIcon />
              <span>Demo</span>
            </div>
          </Link>
        </div>
        <div className='w-[100%] flex items-start justify-center gap-3 mt-2'>
          {props.tech.map((t) => { return <span className='text-[#a29a59]'>{t}</span> })}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject