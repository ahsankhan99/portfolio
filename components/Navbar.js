import Link from 'next/link'
import React from 'react'
import { GithubIcon, LinkedinIcon, MailIcon } from './SvgIcon'
import { motion } from "framer-motion"

const Navbar = () => {
    const variants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 4,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
            },
        },
    }

    return (
        <motion.div
            variants={variants}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: true }}
            className='max-w-[1240px] m-auto flex flex-col sm:flex-row justify-between items-center p-4'>
            <Link href='/'>
                <h1 className='font-bold text-3xl font-space text-text1 hover:text-accent ease-in-out duration-300'>ahsankhan</h1>
            </Link>
            <div className='flex p-2 items-center'>
                <Link href="https://github.com/ahsankhan99" target='_blank' className='mx-2'>
                    <GithubIcon className='hover:fill-accent ease-in-out duration-300 w-8 h-8 text-text1' />
                </Link>
                <Link href="https://www.linkedin.com/in/ahsan-khan99/" target='_blank' className='mx-2'>
                    <LinkedinIcon className='hover:fill-accent ease-in-out duration-300 w-8 h-8' />
                </Link>
                <Link href="mailto:imkhanahsan@gmail.com" className='mx-2'>
                    <MailIcon className='hover:fill-accent ease-in-out duration-300 w-8 h-8' />
                </Link>
            </div>
        </motion.div>
    )
}

export default Navbar