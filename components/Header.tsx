"use client";

import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

function Header() {
  const pathname=usePathname()
  return (
    <header>
      <div className="main-container inner">

      <Link href={'/'}>
        <Image width={132} height={40} src={'/logo.svg'} alt="Logo" />
      </Link>
      <nav>
        <Link href={'/'} className={cn('nav-link',{
          'is-active':pathname==='/',
          'is-home':true
        })}>
          Home
        </Link>
        <p>Search Modal</p>
        <Link href={'/coins'} className={cn('nav-link',{
          'is-active':pathname==='/coins',
        })}>
          All Coins
        </Link>
      </nav>
      </div>
    </header>
  )
}

export default Header