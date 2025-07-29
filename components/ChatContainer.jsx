import React, { useEffect, useRef } from 'react'
import { images, messagesDummyData } from "@/data"
import { formatMessageTime } from '@/lib/utils'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef();

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (!selectedUser) {
    return (
      <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
        <img src={images.logo_icon} className='max-w-16' alt="" />
        <p className='text-lg font-medium text-white'>Chat anytime, anywhere</p>
      </div>
    );
  }

  return (
    <div className='h-full flex flex-col backdrop-blur-lg overflow-scroll'>
      
      {/* Header */}
      <div className='flex items-center gap-3 py-3 px-4 border-b border-stone-300'>
        <img src={images.profile_martin} className='w-8 rounded-full' />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 aspect-square rounded-full bg-green-500'></span>
        </p>
        <img onClick={() => setSelectedUser(null)} src={images.arrow_icon} alt="" className='md:hidden max-w-7' />
        <img src={images.help_icon} alt="" className='max-md:hidden max-w-5' />
      </div>

      {/* Message List */}
      <div className='flex-1 overflow-y-auto p-3 pb-4'>
        {messagesDummyData.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}
          >
            {msg.image ? (
              <img src={msg.image} alt="" className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8' />
            ) : (
              <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'rounded-br-none' : 'rounded-bl-none'}`}>
                {msg.text}
              </p>
            )}
            <div className='text-center text-xs'>
              <img className='w-7 rounded-full' src={msg.senderId === '680f50e4f10f3cd28382ecf9' ? images.avatar_icon : images.profile_martin} alt="" />
              <p className='text-gray-500'>{formatMessageTime(msg.createdAt)}</p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>

      {/* Input Box */}
      <div className='flex items-center gap-3 p-3 border-t border-gray-700'>
        <div className='flex flex-1 items-center bg-gray-100/10 px-3 rounded-full'>
          <input
            type="text"
            placeholder='Send a message'
            className='flex-1 text-sm p-3 border-none rounded-lg outline-none text-white bg-transparent placeholder-gray-400'
          />
          <input type="file" id="image" accept="image/png, image/jpeg" hidden />
          <label htmlFor='image'>
            <img src={images.gallery_icon} alt="" className='w-5 mr-2 cursor-pointer' />
          </label>
        </div>
        <img src={images.send_button} className="w-8 cursor-pointer" />
      </div>

    </div>
  );
};

export default ChatContainer;
