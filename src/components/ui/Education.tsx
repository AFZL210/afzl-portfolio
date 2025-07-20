import Image from "next/image";

interface EducationEntry {
  institutionLogo: string;
  institutionName: string;
  degree: string;
  start: string;
  end: string;
  description: string;
}

interface EducationProps {
  education: EducationEntry[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="w-full h-fit mt-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold gradient-one">Education</h1>
        <div className="w-[80%] h-[.12rem] bg-white" />
      </div>

      <div className="flex flex-col gap-12">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start gap-6">
            <Image
              src={edu.institutionLogo}
              alt={edu.institutionName}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.institutionName}</p>
              <p className="text-gray-400 text-sm">
                {edu.start} - {edu.end}
              </p>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
