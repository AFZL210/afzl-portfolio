import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import data from '@/data/data.json';
import { Button } from "@/components/ui/button";
import FeaturedProject from "@/components/ui/FeaturedProject";

export default function Home() {
  return (
    <div className="w-full h-fit pt-16 flex flex-col items-start justify-start">
        <div className="w-full flex justify-between items-start mt-14">
          <div className="flex flex-col gap-4 font-bold items-start">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl">👋 Hello!</h1>
              <h1 className="text-3xl">I'm Afzal Khan</h1>
              <p className="font-medium">Passionate and creative full-stack software engineer from India 🇮🇳</p>
            </div>
            <div className="flex items-center gap-6 justify-around">
              <Link href={data.github} target="_blank"><GitHubLogoIcon className="w-[24px] h-[24px]"/></Link>
              <Link href={data.linkedin} target="_blank"><LinkedInLogoIcon className="w-[24px] h-[24px]"/></Link>
              <Link href={data.twitter} target="_blank"><TwitterLogoIcon className="w-[24px] h-[24px]"/></Link>
            </div>
          </div>
          <Image alt="img" width={150} height={150} src={'/static/profile-img.webp'} className="rounded-[50%]"/>
        </div>

        {/**FEATURED PROJECTS */}
        <section id="featured-projects" className="w-full h-fit mt-20">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold gradient-one">Featured Projects</h1>
            <div>
              <Button variant='link' className="flex items-center justify-center gap-1 hover:gap-2 ease-in-out transition-all"><Link href='/projects'>View All</Link><ArrowRightIcon /></Button>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {data.featuredProjects.map((project: any, index: number) => { return <FeaturedProject key={index} demoUrl={project.demoUrl} description={project.description} githubUrl={project.githubUrl} heading={project.heading} subHeading={project.subHeading} tech={project.tech} video={project.video} /> })}
          </div>
        </section>
    </div>
  );
} 