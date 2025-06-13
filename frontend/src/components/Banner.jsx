import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
		e.preventDefault();

        navigate("/GTA6");
	};

  return (
    <div className='bg-gradient-to-r from-blue-950 to-cyan-400 w-full h-12 '>

        <div>
           <motion.button className='mt-3.5  w-full  text-cyan-200 font-bold uppercase cursor-pointer
            hover:text-white text-[.85rem] tracking-widest transition duration-250 '
            type='submit'
            onClick={handleSignUp}
            >
            watch grand theft auto vi trailer 2 now 
            </motion.button> 
        </div>
     
    </div>
  )
}

export default Banner
