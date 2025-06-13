import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import {motion} from 'framer-motion'

const Downloads = () => {
  return (
    <div className='w-full  bg-[#0d0c0c]'>

        <Banner />
        <Navbar />

       <section className='bg-black w-335 mt-20 ml-20 flex border rounded-2xl'>

          <img
            src='download1.jpg'
            alt='wallpaper'
            className='w-140 mt-20 ml-20 cursor-pointer '
        />

        <div className='text-white mt-20 ml-18'>
          
          <h1 className='font-bold text-4xl'>Red Dead Redemption 2</h1>

          <p className='mt-10 text-xl'>America, 1899. The end of the Wild West era has begun as<br/>lawmen hunt down 
            the last remaining outlaw gangs.Those<br/> who will not surrender or succumb are killed.</p>
            <p className='mt-10 text-xl'>After a robbery goes terribly wrong in the western town of <br/>Blackwater,
               Arthur Morgan and the Van der Linde gang are <br/> forced to flee. With federal agents and the best 
               bounty<br/> hunters in the nation massing on their heels, the gang must<br/> rob, steal, and fight their
                way across the rugged heartland of <br/> America in order to survive. As deepening internal divisions<br/>
                threaten to tear the gang apart, Arthur must make a choice <br/> between his own ideals and loyalty 
                to the gang who raised <br/> him.</p>

          <motion.button className='mt-10 py-4 px-15 bg-black text-white font-bold uppercase rounded-md shadow-lg text-xl
         border-2 border-white  hover:bg-[#ffb100] hover:text-black hover:border-0 transition duration-200 cursor-pointer'>
            Download now
        </motion.button>

        </div>

        </section>
    </div>
  )
}

export default Downloads
