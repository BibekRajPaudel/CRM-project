import React from 'react'
import Sidebar from '../Components/SidebarComponent/Sidebar'
import Topbar from '../Components/TopbarComponent/Topbar'

const Manager = () => {
    return (
        <>
            <Topbar />
            <Sidebar />
            <div className='mt-[80px] ml-[250px]'>Manager</div>
        </>
    )
}

export default Manager