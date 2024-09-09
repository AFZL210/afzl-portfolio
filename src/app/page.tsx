import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-fit pt-16 flex flex-col items-start justify-start">
        <div className="w-full flex justify-between items-start mt-14">
          <div className="flex flex-col gap-4 font-bold">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl">👋 Hello!</h1>
              <h1 className="text-3xl">I'm Afzal Khan</h1>
              <p className="font-medium">Passionate and creative full-stack software engineer from India 🇮🇳</p>
            </div>
            <div className="flex items-center justify-around p-3 rounded-md">

            </div>
          </div>
          <Image alt="img" width={150} height={150} src={'/static/profile-img.webp'} className="rounded-[50%]"/>
        </div>
    </div>
  );
}