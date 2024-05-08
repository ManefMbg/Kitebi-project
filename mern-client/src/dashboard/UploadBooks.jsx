import React, { useState } from 'react'
import {Label, Select, TextInput, Textarea, Button } from "flowbite-react";

const UploadBooks = () => {
  const bookCategories = [
    "Fiction",
    "Horror",
    "Fantasy",
    "Romance",
    "Historical Fiction",
    "History",
    "Humor",
    "Mystery & Thriller",
    "Science Fiction"
  ]
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
     setSelectedBookCategory(event.target.value)
  }

//   Book submit
const handleBookSubmit = (event) =>{
     event.preventDefault();
     const form = event.target;

     const bookTitle = form.bookTitle.value;
     const authorName = form.authorName.value;
     const imageUrl = form.imageUrl.value;
     const category = form.categoryName.value;
     const bookDescription = form.bookDescription.value;
     const bookPdfUrl = form.bookPdfUrl.value;

     const bookObject = {
          bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
     }
     // console.log(bookObject)

     // send data to db

     fetch("http://localhost:5000/upload-book", {
          method: "Post",
          headers: {
               "content-type": "application/json",
          },
          body: JSON.stringify(bookObject)
     }).then(res => res.json()).then(data => {
          // console.log(data)
          alert("Book uploaded successfuly")
          form.reset();
     })
}

  return (

    <div className='x-4 my-12'>
     <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
     <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4"> 

        {/* Book name */}
      <div className='flex gap-8'>
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                   <Label htmlFor="bookTitle" value="Book Title" />
              </div>
                   <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book name" required />
           </div>

        {/* Author name */}
           <div className='lg:w-1/2'>
              <div className="mb-2 block">
                   <Label htmlFor="authorName" value="Author" />
              </div>
                   <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required />
           </div>
       </div>
        {/* Book Image */}
       <div className='flex gap-8'>
          <div className='lg:w-1/2'>
              <div className="mb-2 block">
                   <Label htmlFor="imageUrl" value="Book's cover" />
              </div>
                   <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Image URL" required />
           </div>

        {/* Category */}
           <div className='lg:w-1/2'>
           <div className="mb-2 block">
               <Label htmlFor="inputState" value="Book Category" />
              </div>

          <Select id='inputState' name='categoryName' className='w-full rounded' 
          value={selectedBookCategory} onChange={handleChangeSelectedValue}>
               {
                    bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
               }
          </Select>
           </div>
       </div>

     {/* Book description */} 
     <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Description" required rows={6} className='w-full' />
      </div>

      {/* Book PDF link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book PDF Url" />
        </div>
        <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="URL" />
      </div>

     <div>
          <Button type="submit" className='mt-5'>Upload Book</Button> 
     </div>
    </form>
 </div> 
  )
}

export default UploadBooks