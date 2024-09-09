import Link from "next/link";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";


interface FeaturedProjectI {
    demoUrl: string,
    githubUrl: string,
    subHeading: string,
    heading: string,
    description: string,
    tech: string[],
    video: string
}

const FeaturedProject: React.FC<FeaturedProjectI> = (props) => {
    return (
        <div className='flex flex-col w-[100%] items-start'>
      <span className='text-[#a29a59]'>{props.subHeading}</span>
      <h1 className='font-bold text-xl'>{props.heading}</h1>
      <div className={`mt-2 w-[100%] h-[32rem] flex flex-col boxshadow-one px-3 rounded-md gap-4 items-center justify-center`}>
        <div className='w-[90%] mx-auto h-[20rem]'>
          <video autoPlay src={props.video} className='w-[100%] h-[100%]' />
        </div>
        <span>{props.description}</span>
        <div className='w-[100%] flex items-center justify-around'>
          <Link href={props.githubUrl} target='_blank' className='w-[45%] py-1 flex items-center justify-center'>
            <div className={`w-[100%] py-1 rounded-[.8rem] cursor-pointer flex items-center justify-center gap-2 border`}>
              <GitHubLogoIcon />
              <span>GitHub</span>
            </div>
          </Link>

          <Link href={props.demoUrl} target='_blank' className='w-[45%] py-1 flex items-center justify-center'>
            <div className={`w-[100%] py-1 rounded-[.8rem] cursor-pointer flex items-center justify-center gap-2 border`}>
              <GlobeIcon />
              <span>Demo</span>
            </div>
          </Link>
        </div>
        <div className='w-[100%] flex items-start justify-center gap-3 mt-2'>
          {props.tech.map((t, index) => { return <span key={index} className='text-[#a29a59]'>{t}</span> })}
        </div>
      </div>
    </div>
    )
}

export default FeaturedProject;