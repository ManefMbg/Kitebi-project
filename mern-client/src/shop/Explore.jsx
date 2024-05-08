import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px24'>
        <h2 className='text-5xl font-bold text-center'>All Books</h2>

        <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
          {
            books.map(book => <Card key={book.id}>
              <img src={book.imageUrl} alt="" className='h-96'/>
              <h5 className="text-2xl font-bold tracking-tight text-gray-800 ">
                {book.bookTitle}
              </h5>
              <p className="font-normal text-gray-800 mt-4 dark:text-gray-500">
              {book.bookDescription} 
              </p>

              <button className='bg-blue-700 font-semibold text-white py-2 mt-4 rounded'><Link to={`/book/${book._id}`}>Read Now</Link></button>
            </Card>)
          }
        </div>
    </div>
  )
}

export default Shop
