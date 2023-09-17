import React from 'react'

const Footer = () => {
    return (
        <div className='h-20 bg-slate-800 flex justify-center items-center p-5'>
            <span className="font-bold text-white text-md">Best Eats &copy; {new Date().getFullYear()}</span>
        </div>
    )
}

export default Footer
