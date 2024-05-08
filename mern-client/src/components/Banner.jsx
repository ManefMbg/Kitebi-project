import React from 'react'
import BannerCard from '../home/BannerCard'


const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>

        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
    
          <h1 className='text-5xl font-bold leading-snug text-black'>Read and Explore your Favourit 
          <span className='text-blue-600'> Books For FREE!</span></h1>

          <p className='md:w-4/5 text-lg'>See what books your friends are reading. Track the books you're reading, have read, and want to read. 
          Check out your personalized book recommendations. Our recommendation engine 
          analyzes 20 billion data points to give suggestions tailored to your literary tastes.</p>

            <div>
                <input type="search" name="search" id='search' placeholder='Search a book' 
                className='py-2 px-2 rounded-s-sm outline-none'/>
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black 
                transition-all ease-in duration-200'>Search</button>
            </div>
        </div>

        {/* right side */}
        <div>
          <BannerCard/>
        </div>
      </div>
    </div>
  )
}

export default Banner