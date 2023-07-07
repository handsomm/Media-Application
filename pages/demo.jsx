import Tooltip from '@/components/Tooltip';
import Image from 'next/image'
import React from 'react'
// import favicon from '@/public/vercel.svg'
import { FaRegPlusSquare, FaPalette, FaImage } from "react-icons/fa";
import { FiLayout, FiFileText, FiAlertCircle, FiSettings, FiEye, FiPackage, FiUsers } from 'react-icons/fi'
import { HiChevronLeft, HiChevronDown, HiOutlineDeviceTablet } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { GoDeviceDesktop, GoDeviceMobile } from "react-icons/go";
import { TbDeviceMobileRotated } from "react-icons/tb";

const demo = () => {
    return (
        <div className='flex bg-gray-100 font-sans text-gray-900'>

            <aside className='h-screen bg-white border-r border-gray-200 w-18 flex flex-col '>
                <div className="h-18 w-full flex items-center justify-center border-b border-gray-200">
                    <Image src={'/favicon.ico'} width={35} height={35} />
                </div>
                <nav className='flex flex-1 flex-col gap-y-4 pt-10 items-center'>
                    <a href="" className='rounded-xl relative group bg-gray-100 p-2 text-blue-600 hover:bg-gray-50'>
                        <FaRegPlusSquare size={30} />
                        <Tooltip>Add element <span className='text-gray-400'>(A)</span></Tooltip>
                    </a>
                    <a href="" className='rounded-xl relative group bg-gray-100 p-2 hover:bg-gray-50'>
                        <FiLayout size={30} className='stroke-current' />
                        <Tooltip>Layout <span className='text-gray-400'>(A)</span></Tooltip>
                    </a>
                    <a href="" className='rounded-xl relative group bg-gray-100 p-2 hover:bg-gray-50'>
                        <FaPalette size={30} />
                        <Tooltip>Theme <span className='text-gray-400'>(A)</span></Tooltip>
                    </a>
                    <a href="" className='rounded-xl relative group bg-gray-100 p-2 hover:bg-gray-50'>
                        <FiFileText size={30} />
                        <Tooltip>Assets <span className='text-gray-400'>(A)</span></Tooltip>
                    </a>
                    <a href="" className='rounded-xl relative group bg-gray-100 p-2 hover:bg-gray-50'>
                        <FaImage size={30} />
                        <Tooltip>Images <span className='text-gray-400'>(A)</span></Tooltip>
                    </a>
                </nav>

                <div className='flex flex-col items-center gap-y-4 py-10'>
                    <button href="" className='rounded-xl relative group bg-gray-100 p-2 hover:bg-gray-50'>
                        <FiAlertCircle size={30} />
                        <Tooltip>Help <span className='text-gray-400'>(A)</span></Tooltip>
                    </button>
                    <button href="" className='rounded-xl relative group bg-gray-100 p-2 hover:bg-gray-50'>
                        <FiSettings size={30} />
                        <Tooltip>Settings <span className='text-gray-400'>(A)</span></Tooltip>
                    </button>
                    <button >
                        <Image src={'/assets/avatar_2.jpeg'} height={35} width={35} className='rounded-full overflow-hidden' />
                    </button>
                </div>
            </aside>

            <div className="h-screen flex-1 flex flex-col">
                <header className="h-18 px-8 gap-x-6 bg-white flex justify-center items-center border-b border-gray-200">
                    <button className='flex items-center justify-center rounded-xl bg-gray-100 p-2'>
                        <HiChevronLeft size={30} className='text-gray-400' />
                    </button>

                    <button className='flex flex-col rounded-xl bg-gray-100 p-2 border border-gray-200'>
                        <div className='flex items-center gap-x-2'>
                            <span className='text-sm'>Page: Homepage - Shibu</span>
                            <HiChevronDown size={30} className='text-gray-400' />
                        </div>
                        <div className='text-xs text-gray-400'>http://localhost:3000</div>
                    </button>

                    <button className='flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2'>
                        <FiEye size={30} className='text-gray-400' />
                        <span className='text-sm font-semibold leading-6'>Preview</span>
                    </button>

                    <div className="h-full w-px bg-gray-200"></div>

                    <div className='flex items-center gap-x-3'>
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
                    </div>

                    <div className="h-full w-px bg-gray-200"></div>

                    <button className='rounded-xl p-2 bg-gray-100 flex items-center justify-center gap-x-3'>
                        <span className='text-sm font-semibold leading-4'>960 PX / 100%</span>
                        <HiChevronDown size={30} className='text-gray-400' />
                    </button>

                    <button className='rounded-xl py-2 px-4 bg-gray-100 flex items-center justify-center'>
                        <FiPackage size={30} className='text-gray-400' />
                    </button>

                </header>

                <main className='flex-1 overflow-y-scroll px-12'>
                    <div className="my-12 bg-white">
                        <nav className='flex items-center justify-between px-12 py-6'>
                            <img className="h-11 w-11" src={'/favicon.ico'} />
                            <div className="flex gap-x-6">
                                <button className='rounded-full bg-blue-600 py-4 px-8 text-white'>Hire Us</button>
                                <button>
                                    <HiBars3BottomRight size={30} className='text-gray-900' />
                                </button>
                            </div>
                        </nav>

                        <section className='py-16 px-12'>
                            <h1 className='max-w-3xl text-5xl font-bold leading-[1.4]'>Lorem ipsum dolor sit amet consectetur elit. </h1>
                            <p className='mt-4 text-lg text-gray-400 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam dolor labore libero quam. Distinctio aut, illo incidunt quisquam atque tempora dolorum voluptatum a, iusto alias animi, in hic labore!</p>
                            <div className='flex items-center gap-4 pt-8'>
                                <button className='rounded-full bg-blue-600 px-8 py-5 font-semibold text-white'>Lets work Together</button>
                                <button className='rounded-full border border-gray-200 px-8 py-5 font-semibold text-blue-600'>Check our work</button>
                            </div>
                        </section>

                        <section className='bg-gray-50 py-16 px-12'>
                            <span className='text-sm uppercase text-gray-400'>Our Projects</span>
                            <div className='flex items-center justify-between'>
                                <h1 className='max-w-3xl text-4xl font-semibold leading-[1.4]'>Our Latest Cool Projects</h1>
                                <button className='rounded-full bg-white px-8 py-5 font-semibold text-blue-600'>Check our work</button>
                            </div>

                            <div>
                                {/* <img src={'/'} alt="" /> */}
                            </div>
                        </section>
                    </div>
                </main>
            </div>

            <aside className="h-screen w-[300px] flex flex-col border-l border-gray-200 bg-white">
                <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6">
                    <button className='flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2'>
                        <FiUsers size={30} className='text-gray-400' />
                        <span className='text-sm font-semibold leading-4'>Invite</span>
                    </button>
                    <button className='flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 leading-4 text-white'>Publish</button>
                </div>

                <div>
                    <div className="flex items-center justify-between py-4 px-6 border-b border-gray-200">
                        <span className='text-sm font-semibold'>Selector</span>
                        <span className='text-sm text-gray-400'>
                            Inheriting{" "}
                            <span className='font-medium text-gray-900'>2 Selector</span>
                        </span>
                    </div>
                    <div className="border-b border-gray-200 px-6 py-4">
                        <button className='flex items-center border border-gray-200 bg-gray-50 w-full px-3 py-1.5 rounded-xl justify-between'>
                            <div className='flex items-center gap-x-2'>
                                <span className='rounded-lg bg-white p-1 shadow text-blue-600'><GoDeviceDesktop size={25} /></span>
                                <h1 className='text-sm font-semibold text-blue-600 bg-blue-100 p-1 rounded-lg px-3'>H1 - hero title</h1>
                            </div>
                            <HiChevronDown size={25} className='text-gray-400'/>
                        </button>
                        <div className="mt-2 text-xs text-gray-400">
                            1 on this page, 7 on other pages
                        </div>
                    </div>
                </div>
            </aside>

        </div>
    )
}

export default demo