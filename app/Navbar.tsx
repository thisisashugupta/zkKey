"use client"

import Link from 'next/link'
import logo from '@/public/logo.png'
import Image from 'next/image'
import { ConnectKitButton } from 'connectkit';

export default function Navbar() {
    return (<div className="flex align-center justify-between w-full bg-slate-300 p-4">
        <Image src={logo} width={80} alt='zkkey logo' priority={true} />
        <div className='w-full flex justify-center space-x-6 text-xl text-blue-600'>
            <Link href='/register'>Register</Link>
            <Link href='/permit'>Permit</Link>
            <Link href='/pay'>Pay</Link>
        </div>
        <ConnectKitButton/>
        </div>);
}