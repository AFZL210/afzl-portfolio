"use client"
import React from 'react';
import { Div } from '@/components/styled';
import { useTheme } from 'next-themes';
import { IconButton } from '@/components/ui/Buttons';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { SocialIcon } from '@/components/social-icon';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from 'next/image';
import aboutData from '@/data/about.json';
import DescriptionIcon from '@mui/icons-material/Description';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Link from 'next/link';
import FeaturedProject from '@/components/Projects/FeaturedProject';
import projectData from '@/data/projects.json';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

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
    <Div $theme={theme} className='w-[100vw] mx-auto min-h-screen overflow-x-hidden pb-56 '>
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
                <Link href="/about">
                  <IconButton icon={<PermIdentityIcon style={{ color: theme == "light" ? "white" : "black" }} />} text='More about me' sx={`bg-[#3867d6] p-2 rounded-[.8rem] gap-3 hover:scale-[1.1] cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-${theme == "light" ? "white" : "black"}`} />
                </Link>
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
        <div className='w-[100%] mt-10 flex-col justify-center'>
          <div className='w-[100%] flex items-center justify-between'>
            <h1 className='font-bold text-2xl gradient-one'>Featured Projects</h1>
            <div className='flex items-center gap-5'>
              <Link href={aboutData.resume} target='_blank'>
                <Div className={`flex items-center h-[2.8rem] justify-between gap-2 bg-transparent text-${theme == "light" ? "black" : "white"} border border-${theme == "light" ? "black" : "white"} py-1 px-2 rounded-[.8rem] hover:bg-slate-300 hover:text-black cursor-pointer`}>
                  <DescriptionIcon sx={{}} />
                  <span>Resume</span>
                </Div>
              </Link>
              <Link href="/projects" className='h-[2.8rem]'>
                <IconButton icon={<RemoveRedEyeIcon style={{ color: theme == "light" ? "white" : "black" }} />} text='View All' sx={`bg-[#3867d6] p-2 rounded-[.8rem] gap-1 hover:scale-[1.1] cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200 text-${theme == "light" ? "white" : "black"}`} />
              </Link>
            </div>
          </div>
          {/** FEATURED PROJECTS */}
          <section id="featured-projects" className='w-[100%] flex flex-col mt-5 items-center gap-16'>
            {projectData.featuredProjects.map((project: any) => { return <><FeaturedProject key={new Date().toISOString()} demoUrl={project.demoUrl} description={project.description} githubUrl={project.githubUrl} heading={project.heading} subHeading={project.subHeading} tech={project.tech} video={project.video} /></> })}
          </section>

          {/** HACKATHONS */}
          <section id="hackathons" className='w-[100%] flex flex-col items-start mt-10'>
            <div className='w-[100%] flex items-center gap-10'>
              <div className='w-fit flex items-center'>
                <StarIcon />
                <h1 className='font-bold text-2xl'>Hackathons</h1>
              </div>
              <div className={`w-[80%] h-[.12rem] bg-${theme == "light" ? "black" : "white"}`}></div>
            </div>
            <div className='w-[70%] flex flex-col gap-5 items-start mt-5'>
              {aboutData.hackathons.map((hackathon: string) => {
                return <div className='flex items-center justify-start gap-3'>
                  <EmojiEventsIcon />
                  <span>{hackathon}</span>
                </div>
              })}
            </div>
          </section>
        </div>
      </div>
    </Div>
  )
}

export default page