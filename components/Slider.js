import Image from 'next/image'
import React, { useState } from 'react'
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

const Slider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='gallery' className='max-w-[1240px] mx-auto'>
            <div className='relative justify-center flex p-4'>
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className={index === current ? 'opacity-1 ease-in duration-1000 ' : 'opacity-0'} >
                            <SlArrowLeft size={50} className='absolute top-[40%] left-[0px] text-white/70 cursor-pointer select-none z-[2] m-5 opacity-20' onClick={prevSlide} />
                            {index === current && <Image src={slide.image} alt='project showcase image' className='m-auto object-contain h-[420px]' width={1440} height={600} />}
                            <SlArrowRight size={50} className='absolute top-[40%] right-[0px] text-white/70 cursor-pointer select-none z-[2] m-5 opacity-20' onClick={nextSlide} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slider