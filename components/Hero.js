import React from 'react'
import Button from './Button'
import Fade from 'react-reveal/Fade';

const Hero = () => {
    return (
        <>
            <img src='/pattern-rings.svg' alt='bg ring pattern' className='absolute top-[90px] right-auto left-0  -translate-x-[40%] ' />
            <div className='font-space max-w-[1240px] m-auto p-4'>
                <div>
                    <Fade ssrReveal={true} top delay={200} duration={1500}>
                        <h1 className='text-center sm:text-left font-bold text-7xl text-text1'>Nice to meet you!
                            <br />
                            I'm <span className='underline underline-offset-[15px] decoration-4 decoration-accent'>Ahsan Khan</span>
                        </h1>
                    </Fade>
                    <Fade ssrReveal={true} left delay={400} duration={1500}>
                        <p className='text-center sm:text-start text-xl text-text2 my-14 max-w-[600px]'>Based in Pakistan, I'm a software developer with a strong passion for web development, I strive to create accessible, engaging, and visually appealing websites.</p>
                    </Fade>
                </div>
                <Button title="Contact me" href="#contact" />
                <div className='border-bottom-solid border-text1 border-b-2 my-16' />
            </div >
        </>
    )
}

export default Hero