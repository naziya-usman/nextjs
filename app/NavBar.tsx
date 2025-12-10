import React from 'react'
import Link from 'next/link'
const NavBar = () => {
    return (
        <div className='navbar bg-neutral text-neutral-content'>
            <Link href='/' className='mr-5'> Next.js</Link>
            <Link href='/admin' className='mr-5'> Admin</Link>
            <Link href="/users" className='mr-5'> User</Link>
        </div>
    )
}

export default NavBar
