'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
const NavBar = () => {
    const { status, data: session } = useSession();

    return (
        <div className='navbar bg-neutral text-neutral-content'>
            <Link href='/' className='mr-5'> Next.js</Link>
            <Link href='/admin' className='mr-5'> Admin</Link>
            <Link href="/users" className='mr-5'> User</Link>
            {status === 'authenticated' &&
                <div>
                    <span className='mr-5'> {session?.user?.name} </span>
                    <Link href="/api/auth/signout" className='mr-5'> Sign Out</Link>
                </div>
            }
            {status === 'unauthenticated' && <Link href="/api/auth/signin" className='mr-5'> Sign In</Link>}
        </div>
    )
}

export default NavBar
