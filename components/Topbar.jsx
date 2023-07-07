import Image from 'next/image'
import React from 'react'

import { BsFillPersonFill } from 'react-icons/bs'
import { IoIosNotifications } from 'react-icons/io'

const Topbar = () => {
    return (
        <div className='w-full bg-indigo-400 h-[50px] flex justify-between items-center px-5 py-1 shadow-md'>
            <div>
                <Image
                    src={'/favicon.ico'}
                    width={35}
                    height={35}
                    alt='logo'
                />
            </div>
            <div className='flex text-gray-50 gap-2'>
                <BsFillPersonFill size={30}/>
                <IoIosNotifications size={30}/>
            </div>
        </div>
    )
}

export default Topbar