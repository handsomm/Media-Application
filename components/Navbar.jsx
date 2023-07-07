import React from 'react'
import { HiChevronDown, HiChevronLeft, HiOutlineDeviceTablet, HiOutlineLogout } from 'react-icons/hi'
import { FiEye, FiPackage } from 'react-icons/fi'
import { TbDeviceMobileRotated } from 'react-icons/tb'
import { GoDeviceDesktop, GoDeviceMobile } from 'react-icons/go'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoNotifications } from 'react-icons/io5'

const Navbar = () => {
    return (
        <header className="h-18 px-12 py-3 gap-x-6 bg-transparent shadow-lg text-white flex justify-between items-center">
            {/* <button className='flex items-center justify-center rounded-xl bg-gray-100 p-2'>
                <HiChevronLeft size={30} className='text-gray-400' />
            </button> */}
            <div className='items-center gap-4 hidden sm:flex'>
                <img src={'/assets/avatar_2.jpeg'} className='w-12 h-12 rounded-full   ' />
                <span className='fs-4 font-sans'>Good morning Soumya !</span>
            </div>


            {/* <div className="h-full w-px bg-gray-200"></div> */}

            {/* <div className='flex items-center gap-x-3'>
                <button className='rounded-xl p-2 bg-gray-100 hover:bg-gray-100'>
                    <GoDeviceDesktop size={30} className='text-blue-400' />
                </button>
                <button className='rounded-xl p-2 hover:bg-gray-100'>
                    <HiOutlineDeviceTablet size={30} className='text-gray-400' />
                </button>
                <button className='rounded-xl p-2 hover:bg-gray-100'>
                    <GoDeviceMobile size={30} className='text-gray-400' />
                </button>
                <button className='rounded-xl p-2 hover:bg-gray-100'>
                    <TbDeviceMobileRotated size={30} className='text-gray-400' />
                </button>
            </div> */}

            {/* <div className="h-full w-px bg-gray-200"></div> */}

            {/* <button className='rounded-xl p-2 bg-gray-100 flex items-center justify-center gap-x-3'>
                <span className='text-sm font-semibold leading-4'>960 PX / 100%</span>
                <HiChevronDown size={30} className='text-gray-400' />
            </button> */}

            <div className='py-2 flex items-center gap-3 justify-between'>
                <input
                    className='outline-none border-none p-2 rounded-md text-gray-900 w-56 hidden sm:flex'
                    placeholder='Search...'
                />
                <BsFillPersonFill size={30} className='hover:text-cyan-400 transition-all hidden sm:block' />
                <IoNotifications size={30} className='hover:text-green-400 transition-all hidden sm:block' />
                <HiOutlineLogout size={30} className='hover:text-red-400 transition-all hidden sm:block ' />
            </div>
        </header>
    )
}

export default Navbar
