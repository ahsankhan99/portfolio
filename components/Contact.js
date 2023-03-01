import React from 'react'
import Button from './Button'

const Contact = () => {
    return (
        <div id='contact' className='relative bg-bg-body2 pt-10'>
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
                    <form action="" method="post" className='flex flex-col '>
                        <input type="text" id="name" name="name" placeholder='Name' className='font-bold text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-text1 my-4 text-text1' />
                        <input type="text" id="email" name="email" placeholder='Email' className='font-bold text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-text1 my-4 text-text1' />
                        <textarea rows="4" cols="50" name="message" id="message" placeholder="Message" className='font-bold text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-text1 text-text1 my-4' />
                        <button
                            type='submit'
                            className="my-5 self-end flex justify-center font-space items-center sm:justify-start font-bold text-text1 text-lg uppercase underline underline-offset-[10px] decoration-2 decoration-accent hover:text-accent ease-in-out duration-300 "
                            onClick={(e) => {
                                e.preventDefault();
                                alert("No functionality here!")
                            }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div >
            <img src='/pattern-rings.svg' className='absolute bottom-[2rem] left-0 right-auto -translate-x-[50%] ' />
            <div className=' max-w-[1240px] mx-auto p-4'>
                <div className='border-bottom-solid border-text1 border-b-2 mt-8 my-4 justify-center' />
            </div>
        </div>
    )
}

export default Contact