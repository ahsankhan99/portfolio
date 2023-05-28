import React from 'react'

const Button = ({ title, className, href }) => {
    return (<>
        <a href={href} className={'font-space sm:justify-start font-bold text-text1 text-lg uppercase underline underline-offset-[10px] decoration-2 decoration-accent hover:text-accent ease-in-out duration-300 ' + className}>
            {title}
        </a>
    </>
    )
}

export default Button