import React from 'react'
import Button from './Button'

const Contact = () => {
    return (
        <div id='contact' className='bg-bg-body2 pt-10'>
            <div className='max-w-[1240px] m-auto p-4 grid grid-cols-1 lg:grid-cols-2 space-x-16'>
                <div>
                    <h1 className='text-8xl font-space text-text1 font-semibold mb-5 sm:mb-0 text-center lg:text-start'>
                        Contact
                    </h1 >
                    <p className='text-xl text-text2 my-7 font-space text-center lg:text-start'>
                        I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.
                    </p>
                </div>
                <div>
                    <form action="/send-data-here" method="post" className='flex flex-col'>
                        <input type="text" id="name" name="name" placeholder='Name' className=' my-2 font-bold text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-text1 my-4' />
                        <input type="text" id="email" name="email" placeholder='Email' className='my-2 font-bold text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-text1 my-4' />
                        <Button title="Send Message" className="my-5 self-end" />
                    </form>
                </div>
            </div >
            <div className=' max-w-[1240px] m-auto p-4'>
                <div className='border-bottom-solid border-text1 border-b-2 mt-8 my-4 justify-center' />
            </div>
        </div>
    )
}

export default Contact