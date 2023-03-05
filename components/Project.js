import Image from 'next/image'
import React from 'react'
import Slider from './Slider'

const Project = ({ title, stack, slides }) => {
    return (
        <div className='text-start'>
            <Slider slides={slides} />
            <h1 className='text-text1 font-space text-2xl font-bold mt-5 p-4'>{title}</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-1'>
                {stack.map((item, index) => <p key={index} className='mr-3 text-xl font-semibold uppercase font-space p-4'>{item}</p>)}
            </div>
        </div>
    )
}

export default Project