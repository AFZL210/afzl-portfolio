import Image from "next/image";
import { ExperienceData } from "@/app/page";

interface ExperienceProps {
  experience: ExperienceData[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="w-full h-fit mt-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold gradient-one">Experience</h1>
        <div className={`w-[80%] h-[.12rem] bg-white`}></div>
      </div>
      <div className="flex flex-col gap-8">
        {experience.map((exp, index) => (
          <div key={index} className="flex items-start gap-6">
            <Image
              src={exp.companyLogo}
              alt={exp.position}
              width={48}
              height={48}
              className="rounded-[50%]"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{exp.position}</h3>
              <p className="text-gray-400">{exp.companyName}</p>
              <p className="text-gray-400">
                {exp.start} - {exp.end}
              </p>
              <p>{exp.description}</p>
              <div className="flex gap-2 flex-wrap mt-2">
                {exp.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-sm text-gray-700 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
