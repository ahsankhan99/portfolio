import React from 'react'

const Skills = () => {
    return (
        <div className='relative'>
            <div className='justify-center max-w-[1240px] font-space m-auto p-4 grid lg:grid-cols-3 md:grid-cols-2 gap-5 overflow-x-hidden'>
                <h2 className='text-text1 text-center text-5xl font-black p-8 '>
                    HTML
                </h2>
                <h2 className='text-text1 text-center text-5xl font-black p-8'>
                    CSS
                </h2>
                <h2 className='text-text1 text-center text-5xl font-black p-8'>
                    JavaScript
                </h2>
                <h2 className='text-text1 text-center text-5xl font-black p-8'>
                    ReactJS
                </h2>
                <h2 className='text-text1 text-center text-5xl font-black p-8'>
                    NextJS
                </h2>
                <h2 className='text-text1 text-center text-5xl font-black p-8'>
                    TailwindCSS
                </h2>
                <h2 className='text-text1 text-center text-5xl font-black p-8'>
                    React Native
                </h2>
                <h2 className='text-text1 text-center text-5xl font-black p-8'>
                    C#
                </h2>
                <h2 className='text-text1 text-center text-5xl font-black p-8'>
                    Unity
                </h2>
            </div>
            <img src='/pattern-rings.svg' alt='bg ring pattern' className='absolute bottom-[10rem] right-0 left-auto translate-x-[50%] overflow-x-hidden' />
            <div className=' max-w-[1240px] m-auto p-4'>
                <div className='border-bottom-solid border-text1 border-b-2 my-16 justify-center    ' />
            </div>
        </div>
    )
}

export default Skills