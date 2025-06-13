import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Globe, Search, User } from 'lucide-react';


const Navbar = () => {

     const [dropdownOpen, setDropdownOpen] = useState(false);
  
    return (
    
    <header className='bg-black w-full h-20 flex items-center justify-between px-10 border border-[#333]'>

    {/* Logo & Nav */}
      <div className='flex items-center space-x-75'>

        <Link to={"/"}>
          <img
            src='logo.png'
            alt='Logo'
            className='w-8 h-8 mx-10 cursor-pointer'
          />
        </Link>

        <nav>
          <ul className='text-white flex space-x-12 font-semibold'>

            <li className='relative group'>
                <a href="/Games">Games</a>
                <span className='absolute left-0 -bottom-6 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-200 '/>
            </li>

            <li className='relative group'>
                <a href="/Newswire">Newswire</a>
                <span className='absolute left-0 -bottom-6 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-150 '/>
            </li>
            
            <li className='relative group'>
                <a href="/Videos">Videos</a>
                <span className='absolute left-0 -bottom-6 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-200 '/>
            </li>
            
            <li className='relative group'>
                <a href="/Downloads">Downloads</a>
                <span className='absolute left-0 -bottom-6 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-150 '/>
            </li>
            
            <li className='relative group'>
                <a href="">Store</a>
                <span className='absolute left-0 -bottom-6 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-200 '/>
            </li>
            
            <li className='relative group'>
                <a href="">Support</a>
                <span className='absolute left-0 -bottom-6 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-200 '/>
            </li>

          </ul>
        </nav>

      </div>

    {/* Button , Search , User */}
      <div className='flex items-center space-x-8 relative mr-10'>

        <motion.button className='py-1.5 px-3 bg-[#ffb100] text-black uppercase font-bold rounded-md shadow-lg
         hover:bg-[#ffb300e9] transition duration-200 cursor-pointer'>

          <Link to={"/game-launcher"}>Get Launcher</Link> 
        
        </motion.button>

        <Search className='text-white cursor-pointer' />

        <div className='relative'>

          <User
            className='text-white cursor-pointer size-8 bg-[#1c1c1c] p-1.5 rounded-full'
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {dropdownOpen && (
            <div className='absolute -right-8 mt-6 w-85 bg-[#1c1c1c] text-white rounded-md shadow-lg border border-[#333] z-50'>

              <Link to="/signin" className='block px-6 py-5 text-sm font-semibold hover:bg-[#2a2a2a] border-b border-[#333]'>Sign In</Link>

              <Link to="/signup" className='block px-6 py-5 text-sm font-semibold hover:bg-[#2a2a2a] border-b border-[#333]'>Sign Up</Link>

              <Link to={""} className='block px-6 py-5 text-sm font-semibold hover:bg-[#2a2a2a] border-b border-[#333]'>Help</Link>

              <Link className=' px-6 py-5 text-sm font-semibold hover:bg-[#2a2a2a] border-b border-[#333] flex' ><Globe className='mr-2'/> English</Link>
            </div>
          )}
        </div>
      </div>

    </header>

  )
}

export default Navbar
