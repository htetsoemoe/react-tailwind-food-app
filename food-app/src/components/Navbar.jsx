import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false)

    return (
        <div className='max-w-[1400px] mx-auto flex justify-between items-center p-4'>
            {/* Left Side */}
            <div className="flex items-center">
                <div className="cursor-pointer mr-2">
                    <AiOutlineMenu onClick={() => setOpenSideMenu(!openSideMenu)}
                        size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 mr-2'>
                    Best <span className='font-bold'>Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/* Search Input */}
            <div className="flex items-center w-[200px] sm:w-[400px] lg:w-[500px] px-2 bg-gray-200 rounded-full">
                <AiOutlineSearch size={25} />
                <input className='bg-transparent p-2 w-full focus:outline-none'
                    type="text"
                    placeholder='Search Foods' />
            </div>

            {/* Cart Button */}
            <button className="bg-black text-white md:flex items-center py-2 rounded-full">
                <BsFillCartFill size={20} className='mr-2' /> Cart
            </button>

            {/* Mobile Menu */}
            {/* Overlay => If sideBarMenu state is false, overlay will hide otherwise will show. */}
            {openSideMenu ? <div className="bg-black/80 top-0 left-0 w-full z-10 fixed h-screen duration-300"></div> : ""}

            {/* Side drawer menu => If sideBarMenu state is false, sideBarMenu will hide otherwise will show.*/}
            <div className={openSideMenu ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 w-[300px] left-[-100%] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose onClick={() => setOpenSideMenu(!openSideMenu)}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer' />
                <h2 className="text-2xl p-4">
                    Best <span className='font-bold'>Eats</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800 cursor-pointer'>
                        <li className='text-lg py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                        <li className='text-lg py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-lg py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                        <li className='text-lg py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-lg py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className='text-lg py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                        <li className='text-lg py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
