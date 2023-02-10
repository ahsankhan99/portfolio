import React from 'react'
import Button from './Button'

const Projects = () => {
    return (
        <div className='max-w-[1240px] m-auto flex flex-col sm:justify-between sm:flex-row justify-center p-4'>
            <h1 className='text-8xl font-space text-text1 font-semibold text-center mb-10 sm:mb-0'>
                Projects
            </h1>
            <Button title="Contact me" />
        </div>
    )
}

export default Projects