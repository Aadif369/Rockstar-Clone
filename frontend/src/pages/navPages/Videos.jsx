import React from 'react'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'

import {motion} from 'framer-motion'

const Videos = () => {
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

        <h1 className='mt-4 text-4xl '>Trailer 2</h1>

        <motion.button className='mt-10 py-4 px-15 bg-black text-white uppercase rounded-md shadow-lg text-xl
         border-2 border-white  hover:bg-[#ffb100] hover:text-black hover:border-0 transition duration-200 cursor-pointer'>
            LEARN MORE
        </motion.button> 

        </div>
        
        </section>

    </div>
  )
}

export default Videos
