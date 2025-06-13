import React from 'react';

const newsData = [
  { image: 'newswire1.jpg', date: 'May 6, 2025', title1:'Grand Theft Auto VI', title2: 'Grand Theft Auto VI — Watch Trailer 2 Now' },
  { image: 'newswire2.png', date: 'May 8, 2025', title1:'GTA Online', title2: 'Secure the Bag with Bonuses on The Contract and More' },
  { image: 'newswire3.jpg', date: 'May 2, 2025', title1:'Grand Theft Auto VI', title2: 'Grand Theft Auto VI is Now Coming May 26,2026' },
  { image: 'newswire4.jpg', date: 'May 1, 2025', title1:'GTA Online', title2: 'Assert Dominance with the Free Mammoth Patriot Mil-Spec for GTA+ Members ' },
  { image: 'newswire5.jpg', date: 'May 1, 2025', title1:'GTA Online', title2: 'Drive Thrive with 4X GTA$ and RP on Open Wheel Races' },
  { image: 'newswire6.jpg', date: 'April 29, 2025', title1:'Read Dead Online', title2: 'Big Bonuses for All Specialist Roles in Red Dead Online' },
];

const NewswireGrid = () => {
  return (
    <section className='bg-[#121111] w-full px-20 py-10 text-white'>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {newsData.map((item, index) => (

          <div key={index} className='bg-black border border-[#333]'>

            <img src={item.image} alt='' className=' cursor-pointer mb-4' />
            
            <div className='flex items-center font-bold mt-10 ml-6'>
            
              <p>{item.title1}</p>
              <span className='ml-4 font-light text-[#848484]'>{item.date}</span>
            
            </div>
            
            <h1 className='mt-2 ml-6 text-2xl font-bold pb-10'>{item.title2}</h1>
          
          </div>

        ))}

      </div>
    
    </section>
  );
};

export default NewswireGrid;
