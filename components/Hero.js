import React, { useEffect, useState } from 'react'
import Button from './Button'
import { motion } from "framer-motion"
import { fadeIn } from '@/framer/variants'

const Hero = () => {

    const nameArray = ['A', 'h', 's', 'a', 'n']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',

    ]


    return (
        <>
            <img src='/pattern-rings.svg' alt='bg ring pattern' className='absolute top-[110px] right-auto left-0  -translate-x-[40%] ' />
            <div className='font-space max-w-[1240px] mx-auto px-4 py-10'>

                <div>
                    <motion.h1 variants={fadeIn('down', 0.1)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-animate-hover text-center sm:text-left font-bold text-7xl text-text1'>
                        <span>H</span>
                        <span>i,</span>
                        <br />
                        <span>I</span>
                        <span className='mr-1'>'m</span>
                        {
                            nameArray.map(letter => <span className='underline underline-offset-[15px] decoration-4 decoration-accent'>{letter}</span>)
                        }
                        <span>,</span>
                        <br />
                        {
                            jobArray.map(letter => <span className={`mt-3 ${letter === ' ' ? 'ml-1' : null}`}>{letter}</span>)
                        }
                        <span className='animate-pulse text-accent'>.</span>

                    </motion.h1>
                    <motion.p variants={fadeIn('right', 0.7)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-center sm:text-start text-xl text-text2 my-14 max-w-[600px]'>Based in Pakistan, I'm a software developer with a strong passion for web development, I strive to create accessible, engaging, and visually appealing websites.</motion.p>
                </div>
                <Button title="Contact me" href="#contact" />
                <div className='border-bottom-solid border-text1 border-b-2 py-5 my-16' />
            </div >
        </>
    )
}

export default Hero