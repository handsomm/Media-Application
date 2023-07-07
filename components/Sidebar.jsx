import { useSession, getSession, signOut } from "next-auth/react"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

import { AiFillStar, AiOutlineDashboard, AiOutlinePlayCircle } from 'react-icons/ai'
import { IoPersonSharp } from 'react-icons/io5'
import { MdFavorite, MdPermMedia } from 'react-icons/md'
import Tooltip from '@/components/Tooltip'
import React from 'react'

export default function Home() {
    return (
        <>
            <div className='flex bg-gray-100 font-sans text-gray-900'>
                <aside className='h-screen bg-[#13152D] text-white shadow-sm w-20 sm:w-48 flex flex-col '>
                    <div className="h-18 px-12 py-3 w-full flex items-center justify-center">
                        <h2 className='text-white p-2 hidden sm:block'>ADMIN</h2>
                    </div>
                    <nav className='flex flex-1 flex-col gap-y-4'>
                        <div className='p-2'>
                            <span className='uppercase text-sm hidden sm:block'>Dashboard</span>
                            <div className='px-2 mt-4 '>
                                <Link href='/' className='flex group relative mb-4 p-2 rounded-md transition-all duration-300 items-center justify-center sm:justify-start gap-3 bg-indigo-500 active:bg-indigo-500 text-gray-100 text-decoration-none '>
                                    <AiOutlineDashboard size={24} />
                                    <span className='text-md hidden sm:block'>Dashboard</span>
                                    <Tooltip>Dashboard <span className='text-gray-400'>(A)</span></Tooltip>
                                </Link>
                                <Link href='/profile' className='flex group relative mb-4 p-2 rounded-md transition-all duration-300 items-center justify-center sm:justify-start gap-3 hover:bg-indigo-500 text-gray-100 text-decoration-none '>
                                    <IoPersonSharp size={24} />
                                    <span className='text-md hidden sm:block'>Profile</span>
                                    <Tooltip>Profile <span className='text-gray-400'>(B)</span></Tooltip>
                                </Link>
                                <Link href='/library' className='flex group relative mb-4 p-2 rounded-md transition-all duration-300 items-center justify-center sm:justify-start gap-3 hover:bg-indigo-500 text-gray-100 text-decoration-none '>
                                    <MdPermMedia size={24} />
                                    <span className='text-md hidden sm:block'>Library</span>
                                    <Tooltip>Library <span className='text-gray-400'>(C)</span></Tooltip>
                                </Link>
                                <Link href='/favourite' className='flex group relative mb-4 p-2 rounded-md transition-all duration-300 items-center justify-center sm:justify-start gap-3 hover:bg-indigo-500 text-gray-100 text-decoration-none '>
                                    <MdFavorite size={24} className='' />
                                    <span className='text-md hidden sm:block'>Favourite</span>
                                    <Tooltip>Favourite <span className='text-gray-400'>(D)</span></Tooltip>
                                </Link>
                            </div>
                        </div>
                    </nav>

                    {/* <div className='flex flex-col items-center gap-y-4 py-10'>
                  <button href="" className='rounded-xl relative group bg-gray-100 p-2 hover:bg-gray-50'>
                     <FiAlertCircle size={30} />
                  </button>
               </div> */}
                </aside>
            </div>

        </>

    )
}

function User({ session }) {

    function handleSignOut() {
        signOut();
    }

    console.log(session);
    // console.log(session.token.token);

    return (
        <main className='container mx-auto text-center py-20'>
            <h3 className='text-4xl font-bold'>Authorize Home Page</h3>
            <div className='details'>
                <h5>{session.user.name}</h5>
                <h5>{session.user.email}</h5>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={handleSignOut}
                    className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
                >
                    Sign Out
                </button>
            </div>
            <div className='flex justify-center'>
                <Link
                    href={'/profile'}
                    className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50'
                >
                    Profile
                </Link>
            </div>
        </main>
    )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}
