import React from 'react'
import Button from './Button'
import { motion } from "framer-motion"
import { fadeIn } from '@/framer/variants'

const Hero = () => {

    return (
        <>
            <img src='/pattern-rings.svg' alt='bg ring pattern' className='absolute top-[110px] right-auto left-0  -translate-x-[40%] ' />
            <div className='font-space max-w-[1240px] mx-auto px-4 py-10'>
                <div>
                    <motion.h1 variants={fadeIn('down', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className='text-center sm:text-left font-bold text-7xl text-text1'>Nice to meet you!
                        <br />
                        I'm <span className='underline underline-offset-[15px] decoration-4 decoration-accent'>Ahsan Khan</span>
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