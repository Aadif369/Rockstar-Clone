import React from 'react'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'
import GameGrid from '../../components/GameGrid'

const Games = () => {
  return (
    <div className='w-full'>

        <Banner />
        <Navbar />

        <section className='bg-black w-full flex'>

          <img
            src='games1.jpg'
            alt='wallpaper'
            className='w-338 mt-20 ml-20 border rounded-lg shadow-lg transition-transform hover:scale-103 
            ease-in-out duration-300 cursor-pointer '
        />

        </section>
        
        <GameGrid />
    </div>
  )
}

export default Games
