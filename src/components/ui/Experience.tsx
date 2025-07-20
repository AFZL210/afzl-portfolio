import Image from "next/image";

interface Role {
  position: string;
  start: string;
  end: string;
  description: string;
  technologies: string[];
}

interface ExperienceEntry {
  companyLogo: string;
  companyName: string;
  roles: Role[];
}

interface ExperienceProps {
  experience: ExperienceEntry[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="w-full h-fit mt-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold gradient-one">Experience</h1>
        <div className="w-[80%] h-[.12rem] bg-white" />
      </div>

      <div className="flex flex-col gap-12">
        {experience.map((exp, index) => (
          <div key={index} className="flex items-start gap-6">
            <Image
              src={exp.companyLogo}
              alt={exp.companyName}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 font-semibold">{exp.companyName}</p>

              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="mb-4">
                  <h3 className="font-bold">{role.position}</h3>
                  <p className="text-gray-400 text-sm">
                    {role.start} - {role.end}
                  </p>
                  <p className="mt-1">{role.description}</p>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {role.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-sm text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
