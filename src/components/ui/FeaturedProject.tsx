import Link from "next/link";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { FeaturedProjectI } from "@/app/page";

const FeaturedProject: React.FC<FeaturedProjectI> = (props) => {
    return (
        <div className="flex flex-col w-full items-start">
            <span className="text-[#a29a59]">{props.subHeading}</span>
            <h1 className="font-bold text-xl">{props.heading}</h1>
            <div className="mt-2 w-full flex flex-col boxshadow-one px-3 py-3 rounded-md gap-4">
                <div className="flex flex-row items-start gap-4">
                    <div className="w-[50%]">
                        <video autoPlay loop src={props.video} className="w-full h-auto rounded-md" />
                    </div>
                    <div className="w-[50%]">
                        <span className="text-sm">{props.description}</span>
                    </div>
                </div>
                
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <Link href={props.githubUrl} target="_blank" className="flex items-center">
                            <div className="py-1 px-3 rounded-md cursor-pointer flex items-center gap-2 border">
                                <GitHubLogoIcon />
                                <span>GitHub</span>
                            </div>
                        </Link>

                        {props.demoUrl && (
                            <Link href={props.demoUrl} target="_blank" className="flex items-center">
                                <div className="py-1 px-3 rounded-md cursor-pointer flex items-center gap-2 border">
                                    <GlobeIcon />
                                    <span>Live</span>
                                </div>
                            </Link>
                        )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {props.tech.map((t, index) => (
                            <span 
                                key={index} 
                                className="bg-gray-200 text-sm text-gray-700 px-2 py-1 rounded"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;