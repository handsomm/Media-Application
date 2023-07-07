import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdDashboard, MdPeople, MdPhone, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'

const sidebarItems = [
    {
        name: 'Home',
        href: '/',
        icon: AiOutlineHome
    },
    {
        name: 'About',
        href: '/about',
        icon: MdPeople
    },
    {
        name: 'Contact',
        href: '/contact',
        icon: MdPhone
    },
]

const Sidebar = () => {

    const [isCollapsed, setIsCollapsed] = useState(false)

    const collapseHandler = () => {
        setIsCollapsed(prev => !prev)
    }



    return (
        <div className='sidebar__wrapper'>
            <button className='btn' onClick={collapseHandler}>
                <MdOutlineKeyboardArrowLeft />
            </button>

            <aside className='sidebar' data-collapsed={isCollapsed}>
                <div className='sidebar__top'>
                    <Image src={'/favicon.ico'} alt='Logo' width={80} height={80} className='sidebar__logo' />
                    <p className='sidebar__logo_name'>The Brave</p>
                </div>
                <ul className='sidebar__list'>
                    {
                        sidebarItems.map(({ name, href, icon: Icon }) => (
                            <li className='sidebar__item' key={name}>
                                <Link href={href} className='sidebar__link'>
                                    <span className='sidebar__icon'>
                                        <Icon />
                                    </span>
                                    <span className='sidebar__name'>{name}</span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar