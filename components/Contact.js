import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { animate, motion } from "framer-motion"
import { fadeIn } from '@/framer/variants'
import emailjs from '@emailjs/browser';
import { ImSpinner8 } from 'react-icons/im';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errorAnimation, setErrorAnimation] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    const form = useRef();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setErrorAnimation('animate-shake')
            setError('Please fill in all the fields!');

            setTimeout(() => {
                setErrorAnimation('');
            }, 1000);
            return;
        }
        setLoading(true);
        setError('');
        try {
            await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICEID, process.env.NEXT_PUBLIC_TEMPLATEID, form.current, process.env.NEXT_PUBLIC_PUBLICKEY)
            setFormData({ name: '', email: '', message: '' });
            toast.success('✅ Message Sent!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        } catch {
            toast.error('📛 An Error Occurred!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        } finally {
            setLoading(false);
        }

    };

    return (

        <div id='contact' className='relative bg-bg-body2 pt-10'>
            <motion.div variants={fadeIn('right', 0.1)} initial='hidden' whileInView={'show'} viewport={{ once: true, amount: 0.4 }} className='max-w-[1240px] m-auto p-4 grid grid-cols-1 lg:grid-cols-2 space-x-16'>
                <div>
                    <h1 className='sm:text-8xl text-7xl font-space text-text1 font-semibold mb-5 sm:mb-0 text-center lg:text-start'>
                        Contact
                    </h1 >
                    <p className='text-xl text-text2 my-7 font-space text-center lg:text-start'>
                        I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.
                    </p>
                </div>
                <motion.div variants={fadeIn('up', 0.1)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.5 }} >
                    <form ref={form} onSubmit={handleFormSubmit} className='flex flex-col '>
                        <p className={`my-2 font-space sm:justify-start font-bold text-red-600 text-lg uppercase underline underline-offset-[5px] decoration-2 decoration-red-600"  ${errorAnimation}`} >{error}</p>
                        <input onChange={onChange} value={formData.name} type="text" id="name"
                            name="name" placeholder='Name'
                            className='outline-none font-bold text-md uppercase px-3 pb-4
                         bg-bg-body2 border-b-[1px] border-text1 my-4 text-text1' />
                        <input onChange={onChange} value={formData.email} type="email" id="email"
                            name="email" placeholder='Email' autoComplete="email"
                            className='outline-none font-bold 
                            text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-text1 my-4 text-text1' />
                        <textarea onChange={onChange} value={formData.message} rows="4" cols="50"
                            name="message" id="message" placeholder="Message" className='outline-none font-bold 
                         text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-text1 text-text1 my-4' />
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="w-40 my-5 self-end font-space flex items-center justify-center font-bold text-text1 text-lg uppercase underline underline-offset-[10px] decoration-2 decoration-accent hover:text-accent ease-in-out duration-300"
                        >
                            {isLoading ? (
                                <>
                                    <ImSpinner8 className="animate-spin mr-2 text-accent" />
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </motion.div>
            </motion.div >
            <img src='/pattern-rings.svg' alt='bg ring pattern' className='pointer-events-none absolute bottom-[2rem] left-0 right-auto -translate-x-[50%] ' />
            <div className=' max-w-[1240px] mx-auto p-4'>
                <div className='border-bottom-solid border-text1 border-b-2 mt-8 my-4 justify-center' />
            </div>
            <ToastContainer />
        </div >
    )
}

export default Contact;
