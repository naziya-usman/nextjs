'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
const NavBar = () => {
    const { status, data: session } = useSession();

    return (
        <div className="navbar bg-neutral-300 shadow-sm px-4 ">
            {/* Left Side: Brand and Links */}
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">Next.js</Link>
                <Link href="/admin" className="btn btn-ghost btn-sm">Admin</Link>
                <Link href="/users" className="btn btn-ghost btn-sm">Users</Link>
            </div>
            {/* Right Side: Search and Auth */}
            <div className="flex-none gap-2">
                {/* Authentication Logic */}
                {status === 'authenticated' ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border">
                                <img
                                    alt="Profile picture"
                                    src={session?.user?.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li className="menu-title px-4 py-2 text-xs opacity-60">
                                {session?.user?.name}
                            </li>
                            <li>
                                <Link href="/profile" className="justify-between">
                                    Profile
                                    <span className="badge badge-primary">New</span>
                                </Link>
                            </li>
                            <li><Link href="/settings">Settings</Link></li>
                            <li><Link href="/api/auth/signout" className="text-error">Sign Out</Link></li>
                        </ul>
                    </div>
                ) : (
                    /* Show Sign In button if unauthenticated or loading */
                    status === 'unauthenticated' && (
                        <Link href="/api/auth/signin" className="btn btn-primary btn-sm">
                            Sign In
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}

export default NavBar