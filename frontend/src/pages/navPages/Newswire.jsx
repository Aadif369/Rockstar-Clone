import React from 'react'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'


import NewswireGrid from '../../components/NewswireGrid'


const Newswire = () => {
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

        <h1 className='mt-4 text-4xl '>Grand Theft Auto VI <br/>━ Watch Trailer 2 <br/> Now</h1>

        </div>

        </section>
          < NewswireGrid />
        
    </div>
  )
}

export default Newswire
