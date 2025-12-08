'use client'
import { useRouter } from 'next/navigation'
import React, { useReducer } from 'react'

const NewUser = () => {
 const Router= useRouter()
    
  return (
    <div>
    <p>  Create New User </p>
    <button className='btn' onClick={()=>Router.push('/users')}> Create</button>
    </div>
  )
}

export default NewUser
