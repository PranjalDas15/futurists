import React from 'react'

const Button = ({ name, href }) => {
    return (
        <button className=' w-[150px] h-[60px] rounded-full bg-blue-950/80 dark:bg-sky-100/80 hover:bg-sky-800 dark:hover:bg-sky-200/80 text-white dark:text-black text-[18px] font-semibold transition-all transition-setting-1 cursor-pointer' >
            {name}
        </button>
    )
}

export default Button