import Image from 'next/image'
import React from 'react'
import Slider from './Slider'
import { BiLinkExternal } from 'react-icons/bi';
import Link from 'next/link';


const Project = ({ title, stack, slides, link }) => {
    return (
        <div className='text-start'>

            <h1 className='text-text1 font-space text-2xl font-bold mt-8 px-4'>{title} {link && <Link href={link} className='inline' target='_blank'><BiLinkExternal className='inline' /></Link>}</h1>
            <Slider slides={slides} />
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-1'>
                {stack.map((item, index) => <p key={index} className='mr-3 text-xl font-semibold uppercase font-space p-4'>{item}</p>)}
            </div>
        </div>
    )
}

export default Project