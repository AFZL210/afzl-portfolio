import Link from "next/link";
import { Button } from "./button";

const Navbar = () => {
  return (
    <div className='w-[95vw] md:w-[900px] flex justify-between items-center h-16 fixed bg-bgprimary'>
      <Button variant='link' className="px-0"><Link href={'/'} className="font-bold">Afzal Khan</Link></Button>
      <div className="flex items-center justify-center gap-8">
        <Button variant='link' className="px-0"><Link href='/projects'>Projects</Link></Button>
        <Button variant='link' className="px-0"><Link href='/blog'>Blog</Link></Button>
      </div>
    </div>
  )
}

export default Navbar;