import React from 'react'


const gamesData = [
    {image: "games2.jpg" }, {image: "games3.jpg"}, {image: "games4.jpg"}, {image: "games5.jpg"}, {image: "games6.jpg"},
    {image: "games7.jpg"}, {image: "games8.jpg"}, {image: "games9.jpg"}, {image: "games10.jpg"}
]

const GameGrid = () => {
  return (
    <section className='bg-[#121111] w-full px-20 py-9 text-white'>

        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

            {gamesData.map((item, index) => (

                <div key={index} className='bg-black border border-black rounded-xl shadow-lg transition-transform hover:scale-103 
            ease-in-out duration-300'>

            <img src={item.image} alt='' className=' cursor-pointer border border-black rounded-xl' />
            
            </div>

            ))}

        </div>

    </section>
  )
}

export default GameGrid
