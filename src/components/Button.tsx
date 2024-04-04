import Image from 'next/image'
import React from 'react'
type ButtonType={
    type: 'button'| 'submit',
    icon?: string,
    title: string,
    variant: string
    full?:boolean
    
}
 const Button = ({type,icon,title,variant, full}: ButtonType) => {
  return (
    <button
    type={type}
    className={`flexCenter gap-3 rounded-full border border-dark-green px-4 py-2 hover:scale-x-105 transition-all ${variant}`}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className='bold-16 whitespace nowrap cursor-pointer hover:scale-x-105 transition-all  '>{title}</label>
    </button>
)}

export default Button