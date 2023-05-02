import React, { useState } from 'react'
import db from '../firebase';
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({});
    const [error, setError] = useState();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all the fields')
            return;
        }
        setError('');
        try {
            await addDoc(collection(db, "messages"), formData);
            setFormData({ name: '', email: '', message: '' });
            toast.success('✅ Message Sent!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (e) {
            console.log(e)
            toast.error('📛 An Error Occurred!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    };

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
                    <form onSubmit={handleFormSubmit} className='flex flex-col '>
                        <p className="my-2 self-start flex justify-center font-space items-center sm:justify-start font-bold text-red-600 text-lg uppercase underline underline-offset-[5px] decoration-2 decoration-red-600">{error}</p>
                        <input onChange={onChange} value={formData.name} type="text" id="name" name="name" placeholder='Name' className='outline-none font-bold text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-text1 my-4 text-text1' />
                        <input onChange={onChange} value={formData.email} type="email" id="email"
                            name="email" placeholder='Email' autoComplete="email"
                            required className='outline-none font-bold text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-t-0 border-l-0 border-r-0 border-text1 my-4 text-text1' />
                        <textarea onChange={onChange} value={formData.message} rows="4" cols="50" name="message" id="message" placeholder="Message" className='outline-none font-bold text-md uppercase px-3 pb-4 bg-bg-body2 border-b-[1px] border-text1 text-text1 my-4' />
                        <button
                            type='submit'
                            className="my-5 self-end flex justify-center font-space items-center sm:justify-start font-bold text-text1 text-lg uppercase underline underline-offset-[10px] decoration-2 decoration-accent hover:text-accent ease-in-out duration-300 "
                            onClick={handleFormSubmit}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div >
            <img src='/pattern-rings.svg' alt='bg ring pattern' className='absolute bottom-[2rem] left-0 right-auto -translate-x-[50%] ' />
            <div className=' max-w-[1240px] mx-auto p-4'>
                <div className='border-bottom-solid border-text1 border-b-2 mt-8 my-4 justify-center' />
            </div>
            <ToastContainer />
        </div >
    )
}

export default Contact;