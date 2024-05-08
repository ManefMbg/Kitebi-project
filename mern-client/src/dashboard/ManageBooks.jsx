import { Link } from "react-router-dom"
import { Table } from "flowbite-react"; 
import { useEffect, useState } from "react";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  }, [])

    // delete a book
  const handleDelete = (id) =>{
    // console.log(id);
    fetch(`http://localhost:5000/book/${id}`,{
      method: "DELETE",
    }).then(res => res.json()).then(data => {
      alert("Book is Deleted!!")
      setAllBooks(data)
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Books</h2>

      {/* Table for book data */}

      <div className="overflow-x-auto">
      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>N°</Table.HeadCell>
          <Table.HeadCell>Book Title</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Delete</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>10dt</Table.Cell>
            <Table.Cell>
              <button className="bg-green-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium mr-5">
                Edit
              </Link>
              </button>
              <button onClick={() => handleDelete(book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600">
                Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
        
      </Table>
    </div>
    </div>
  )
}

export default ManageBooks