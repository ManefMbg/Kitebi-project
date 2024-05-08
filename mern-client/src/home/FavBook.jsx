import React from 'react'
import FavBookImg from '../assets/banner-books/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'> 
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
        </div>
        <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
                    Find Your Favorite <span className='text-blue-700'>Book Here!</span></h2>

                    <p className='mb-10 text-lg md:w-5/6'><span className='text-blue-600 font-bold'>Kitebi</span> is the world’s largest site for readers and book recommendations. 
                    Our mission is to help readers discover books they love and get more out of reading. <span className='text-blue-600 font-bold'>Kitebi</span> launched in April 2024.</p>

                    {/* Stats */}
                    <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                        <div>
                            <h1 className='text-3xl font-bold'>800+</h1>
                            <p className='text-base'>Book Listing</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold'>5000+</h1>
                            <p className='text-base'>Register Users</p>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bold'>1600+</h1>
                            <p className='text-base'>PDF downloads</p>
                        </div>
                    </div>
                    <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 
                        rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook