"use client"
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import ChatContainer from './ChatContainer'
import RightSidebar from './RightSidebar'

const Homepage = () => {
    const [selectedUser, setSelectedUser] = useState(false)
  return (
   <div className="bg-[url('/assets/bgImage.svg')] bg-contain">
    <div className='border w-full h-screen  sm:px-[15%] sm:py-[5%]'>
            <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full
                             grid grid-cols-1 text-white relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
                <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
                <RightSidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            </div>
    </div>
   </div>
  )
}

export default Homepage