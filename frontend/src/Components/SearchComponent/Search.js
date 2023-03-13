import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <>
            <div className='w-[300px] h-[35px]'>
                <div className='w-full'>
                    <form className='w-full'>
                        <div className='w-full flex items-center h-full'>
                            <input className='w-full h-[35px] p-2 bg-blue-50 rounded-l-lg outline-none text-sm font-poppins' type="text" placeholder="Search" />
                            <p className='bg-blue-50 h-[35px] p-2 top-2 right-3 text-xl rounded-r-lg text-gray-400 flex justify-center items-center'><BiSearch /></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search