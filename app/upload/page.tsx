'use client'
import React from 'react'
import { CldUploadWidget } from 'next-cloudinary'

const UploadPage = () => {
    return (
        <CldUploadWidget uploadPreset='uploadPriset'>
            {({ open }) => <button
                className='btn '
                onClick={() => open()}
            >Upload</button>}
        </CldUploadWidget>
    )
}

export default UploadPage