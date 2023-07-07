import React from 'react'

const Tooltip = ({ children }) => {
    return (
        <div className='absolute inset-y-0 left-14  sm:group-hover:hidden group-hover:flex hidden items-center'>
            <div className='whitespace-nowrap relative px-4 py-2 bg-white rounded-md font-semibold drop-shadow-lg text-gray-900'>
                <div className='absolute inset-y-0 flex items-center -left-1'>
                    <div className='h-2 w-2 rotate-45 bg-white'></div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Tooltip
