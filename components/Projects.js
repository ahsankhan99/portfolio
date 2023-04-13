import React from 'react'
import Button from './Button'
import Project from './Project'
import { SliderData } from './SliderData';

const Projects = () => {
    return (
        <div className='max-w-[1240px] mx-auto pb-20'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between p-4'>
                <h1 className='text-8xl font-space text-text1 font-semibold text-center mb-10 sm:mb-0'>
                    Projects
                </h1>
                <Button title="Contact me" href='#contact' className='mb-5' />
            </div>
            <div className='grid sm:grid-cols-2 text-center gap-5 text-text1'>
                <Project title='SmileCare' stack={['ReactJS', 'TailwindCSS']} slides={SliderData.smilecare} />
                <Project title='Lifestyle - Ecommerce' stack={['HTML', 'CSS', 'JS', 'Bootstrap', 'PHP', 'MySQL']} slides={SliderData.lifestyle} />
                <Project link='https://shortly-url-shortner.vercel.app/' title='Shortly' stack={['NextJS', 'TypeScript', 'TailwindCSS']} slides={SliderData.shortly} />
                <Project link='https://ip-address-tracker-nu.vercel.app/' title='IP Address Tracker' stack={['NextJS', 'TypeScript', 'TailwindCSS']} slides={SliderData.iat} />
                <Project title='Ghost of Helheim (FYP)' stack={['C#', 'Unity']} slides={SliderData.goh} />
            </div>
        </div>
    )
}

export default Projects