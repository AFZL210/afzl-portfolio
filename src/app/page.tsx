import Image from "next/image";
import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  StarFilledIcon,
  StarIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import data from "@/data/data.json";
import Experience from "@/components/ui/Experience";
import FeaturedProjectSection from "@/components/ui/FeaturedProjectsSection";

export interface ExperienceData {
  companyLogo: string;
  companyName: string;
  position: string;
  start: string;
  end: string;
  description: string;
  technologies: string[];
}

export interface FeaturedProjectI {
  demoUrl: string | null;
  githubUrl: string;
  subHeading: string;
  heading: string;
  description: string;
  tech: string[];
  video: string;
}

export default function Home() {
  const experience: ExperienceData[] = data.experience;

  return (
    <div className="w-full h-fit pt-16 flex flex-col items-start justify-start pb-6">
      <div className="w-full flex justify-between items-start mt-14">
        <div className="flex flex-col gap-4 font-bold items-start">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl">👋 Hello!</h1>
            <h1 className="text-3xl">I'm Afzal Khan</h1>
            <p className="font-medium">
              software engineer and B.Tech undergraduate
            </p>
          </div>
          <div className="flex items-center gap-6 justify-around">
            <Link href={data.github} target="_blank">
              <GitHubLogoIcon className="w-[24px] h-[24px]" />
            </Link>
            <Link href={data.linkedin} target="_blank">
              <LinkedInLogoIcon className="w-[24px] h-[24px]" />
            </Link>
            <Link href={data.twitter} target="_blank">
              <TwitterLogoIcon className="w-[24px] h-[24px]" />
            </Link>
          </div>
        </div>
        <Image
          alt="img"
          width={150}
          height={150}
          src={"/static/profile-img.webp"}
          className="rounded-[50%]"
        />
      </div>

      <Experience experience={experience} />

      {/**FEATURED PROJECTS */}
      <FeaturedProjectSection />

      <section
        id="hackathons"
        className="w-[100%] flex flex-col items-start mt-10"
      >
        <div className="w-[100%] flex items-center gap-10">
          <div className="w-fit flex items-center gap-2">
            <StarFilledIcon className="text-yellow-300" />
            <h1 className="font-bold text-2xl gradient-one">Hackathons</h1>
          </div>
          <div className={`w-[80%] h-[.12rem] bg-white`}></div>
        </div>
        <div className="w-[70%] flex flex-col gap-5 items-start mt-5">
          {data.hackathons.map((hackathon: string) => {
            return (
              <div
                key={hackathon}
                className="flex items-center justify-start gap-3"
              >
                <StarIcon className="text-yellow-300" />
                <span>{hackathon}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/** CONTACT SECTION */}
      <section className="w-full flex justify-center items-center mt-20">
        <div className="flex items-center gap-2 text-lg">
          <EnvelopeClosedIcon className="w-[20px] h-[20px]" />
          <a href={`mailto:${data.email}`} className="hover:underline">
            {data.email}
          </a>
        </div>
      </section>
    </div>
  );
}
