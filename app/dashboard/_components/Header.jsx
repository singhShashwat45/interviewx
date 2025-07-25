"use client";
import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname, useRouter } from 'next/navigation';

function Header() {
  const path = usePathname();
  const router = useRouter();

  const navigateTo = (url: string) => router.push(url);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-sm cursor-pointer">
      <div className="flex flex-row" onClick={() => navigateTo('/dashboard')}>
        <Image src={'/logo.svg'} width={100} height={85} alt="InterviewX logo" />
        <div className="text-2xl p-4 font-bold">InterviewX</div>
      </div>
      <ul className="flex gap-6 max-md:hidden">
        <li
          onClick={() => navigateTo('/dashboard')}
          className={`hover:text-fuchsia-500 hover:font-bold transition cursor-pointer
            ${path === '/dashboard' ? 'text-fuchsia-500 font-bold underline' : ''}`}
        >
          Dashboard
        </li>
        <li
          onClick={() => navigateTo('/dashboard/questions')}
          className={`hover:text-fuchsia-500 hover:font-bold transition cursor-pointer
            ${path === '/dashboard/questions' ? 'text-fuchsia-500 font-bold underline' : ''}`}
        >
          Questions
        </li>
        <li
          onClick={() => navigateTo('/dashboard/upgrade')}
          className={`hover:text-fuchsia-500 hover:font-bold transition cursor-pointer
            ${path === '/dashboard/upgrade' ? 'text-fuchsia-500 font-bold underline' : ''}`}
        >
          Upgrade
        </li>
        <li
          onClick={() => navigateTo('/dashboard/how-it-works')}
          className={`hover:text-fuchsia-500 hover:font-bold transition cursor-pointer
            ${path === '/dashboard/how-it-works' ? 'text-fuchsia-500 font-bold underline' : ''}`}
        >
          How it works
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
