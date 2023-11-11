"use client"
import React from 'react'
import { Div } from '@/components/styled';
import { useTheme } from 'next-themes';
import { IconButton } from '@/components/ui/Buttons';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { SocialIcon } from '@/components/social-icon';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import aboutData from '@/data/about.json';

const page = () => {

  const { theme } = useTheme();

  const socialIconSX = [
    {
      '&:hover': {
        color: `${theme == "light" ? "black" : "black"}`,
        backgroundColor: 'white',
      },
    }, { color: `${theme == "light" ? "black" : "white"}` }
  ]

  return (
    <Div $theme={theme} className='w-[100vw] mx-auto min-h-screen'>
      <div className='relative top-[8rem] w-[100vw] md:w-[60vw] mx-auto'>
        <div className='flex items-start justify-between'>
          <div className='w-[70%] flex flex-col'>
            <div className='flex flex-col items-start gap-2'>
              <h1 className='font-bold text-3xl'>👋 Hello!</h1>
              <div className='flex gap-2 items-center'>
                <h1 className='font-bold text-3xl'>I am</h1>
                <h1 className={`font-bold text-3xl ${theme == "dark" ? "text-blue-500" : ""} `}>Afzal Khan</h1>
              </div>
              <div className='mt-2'>
                <p>Passionate and creative full-stack software engineer from India 🇮🇳</p>
              </div>
              <div className='flex items-center gap-5 mt-4'>
                <IconButton icon={<PermIdentityIcon style={{ color: theme == "light" ? "white" : "black" }} />} text='More about me' sx={`bg-[#3867d6] p-2 rounded-[.8rem] gap-3 hover:scale-[1.1] cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-${theme == "light" ? "white" : "black"}`} />
                <div className={`flex items-center justify-evenly gap-1 border ${theme == "light" ? "border-black" : "border-white"} py-1 px-3 rounded-[.8rem]`}>
                  <SocialIcon href={aboutData.links.github} icon={<GitHubIcon sx={socialIconSX} />} sx={`hover:bg-[#e8edf9]`} />
                  <SocialIcon href={aboutData.links.linkedin} icon={<LinkedInIcon sx={socialIconSX} />} sx={`hover:bg-[#e8edf9]`} />
                  <SocialIcon href={aboutData.links.twitter} icon={<TwitterIcon sx={socialIconSX} />} sx={`hover:bg-[#e8edf9]`} />
                </div>
              </div>
            </div>
          </div>

          <div className='w-[30%] h-[100%] flex items-start justify-center'>
            <div className='w-[100%] rounded-full'>
              <Image src={'/static/profile2022.jpeg'} width={150} height={100} alt='Profile' style={{ borderRadius: "50%" }} className='grayscale-[50%] hover:grayscale-0 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
    </Div>
  )
}

export default page