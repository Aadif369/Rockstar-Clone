import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

import NewswireGrid from '../components/NewswireGrid'



const HomePage = () => {

    const navigate = useNavigate();

    const handleViewMore = async (e) => {
        e.preventDefault();

        navigate("/Newswire");

    }

  return (
    <div className='w-full'>

        <Banner />
        <Navbar />

        <section  className='bg-black w-full flex'>

        <img
            src='wallpaper.jpg'
            alt='wallpaper'
            className='w-265 h-150  cursor-pointer'
        />

        <div className='text-white font-bold mt-20 ml-10'>

        <p >Grand Theft Auto VI</p>

        <h1 className='mt-4 text-4xl '>Watch Trailer 2 Now</h1>

        <motion.button className='mt-10 py-4 px-15 bg-black text-white uppercase rounded-md shadow-lg text-xl
         border-2 border-white  hover:bg-[#ffb100] hover:text-black hover:border-0 transition duration-200 cursor-pointer'>
            LEARN MORE
        </motion.button> 

        </div>

        </section>

        <div className='bg-[#121111] w-full flex items-center justify-between px-20 text-white'>

            <h1 className=' mt-17 text-3xl font-semibold'>Newswire</h1>
        </div>

        <NewswireGrid />
        
        <div className='bg-[#121111] w-full'>
            <motion.button className='mt-5 ml-180 py-1 px-2 bg-[#121111] text-white rounded-md shadow-lg text-xl relative 
                overflow-hidden group cursor-pointer underline underline-offset-4 decoration-[#ffb100] decoration-4'
                type='submit'
                onClick={handleViewMore} >

                <span className='absolute inset-x-0 bottom-0 h-full bg-[#ffb100] z-0 origin-bottom scale-y-0 transition-transform 
                duration-300 group-hover:scale-y-100' />
                
                <span className='relative z-10 transition-colors duration-300 group-hover:text-black'>View More</span>
            </motion.button> 


        </div>

    </div>
  )
}

export default HomePage
