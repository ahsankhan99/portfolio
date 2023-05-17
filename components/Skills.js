import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '@/framer/variants'

const Skills = () => {
    const skills = [' HTML/CSS', 'JavaScript', 'TypeScript', 'ReactJS', 'NextJS', 'TailwindCSS', 'MongoDB', 'NodeJS', 'Express', 'React Native', 'C#', 'Unity'];
    return (
        <div className='max-w-[1240px] mx-auto relative'>
            <div
                className='justify-center font-space m-auto
                 p-4 grid lg:grid-cols-3 md:grid-cols-2 gap-5 overflow-x-hidden'>
                {skills.map((skill, index) => <motion.h2 variants={fadeIn('down', 0.3)}
                    initial={'hidden'}
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.4 }} key={index} className='hover:text-accent hover:cursor-crosshair text-text1 text-center text-5xl font-black p-8 '>{skill}</motion.h2>)}


            </div>
            <img src='/pattern-rings.svg' alt='bg ring pattern' className='absolute bottom-[10rem] right-0 left-auto translate-x-[50%] overflow-x-hidden' />
            <div className='m-auto p-4'>
                <div className='border-bottom-solid border-text1 border-b-2 my-16 py-5 justify-center' />
            </div>
        </div>
    )
}

export default Skills