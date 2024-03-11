'use client';
import Logo from '@/assets/logo.svg';
import links from '@/utils/links';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname()

  return <aside className='py-4 px-8 bg-muted h-full'>
    <Image src={Logo} alt="logo" className='mx-auto'/>
    <div className='flex flex-col mt-20 gap-y-4'>
      {links.map((link)=> {
        return <Button asChild key={link.href}>
          <Link href={link.href} className='flex items-cener gap-x-2'>
            {link.icon} <span className='captalize'>{link.label}</span>
          </Link>
        </Button>
      })}

    </div>
 
    
  </aside>
}
export default Sidebar;
