import React from 'react'


interface AdminLayoutProps {
  children: React.ReactNode
}
const adminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className='flex'>
      <aside className='bg-orange-300 p-5 mr-5'>admin</aside>
      <div>{children}</div>
    </div>
  )
}

export default adminLayout
