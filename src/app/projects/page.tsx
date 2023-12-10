"use client"
import React from 'react'
import { Div } from '@/components/styled';
import { useTheme } from 'next-themes';
import projectData from '@/data/projects.json'
import FeaturedProject from '@/components/Projects/FeaturedProject';
import StarIcon from '@mui/icons-material/Star';

const ProjectsPage = () => {

  const { theme } = useTheme();

  return (
    <Div $theme={theme} className='w-[95vw] mx-auto md:w-[100vw] mx-auto min-h-screen overflow-x-hidden pb-56 '>
      <div className='relative top-[8rem] w-[100vw] md:w-[60vw] mx-auto'>
        <div className='w-fit flex items-center gap-2'>
          <StarIcon sx={{ color: "yellow" }} />
          <h1 className='font-bold text-2xl'>Projects</h1>
        </div>
        <section id="featured-projects" className='w-[100%] flex flex-col mt-5 items-center gap-16'>
          {projectData.allProjects.map((project: any) => { return <><FeaturedProject key={new Date().toISOString()} demoUrl={project.demoUrl} description={project.description} githubUrl={project.githubUrl} heading={project.heading} subHeading={project.subHeading} tech={project.tech} video={project.video} /></> })}
        </section>
      </div>
    </Div>
  )
}

export default ProjectsPage