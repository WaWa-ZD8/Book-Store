
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/getAll').then(res => res.json()).then(data => setAllBooks(data))
  }, [])

  // delete book
  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:3000/delete/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json()).then(data => {
      alert("Book is Deleted!")
      

    })

  }

  return (
    <div className=' px-4 my-12'>
      <h2 className=' mb-8 text-3xl font-bold'>Manage A Book</h2>
      {/* table */}

       <Table className=" lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.title}
            </Table.Cell>
            <Table.Cell>{book.author}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <Link to= {`/admin/dashboard/edit/${book._id}`} 
              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={() => handleDelete(book._id)}
              className=" bg-red-500  px-2 py-1 text-white hover:bg-red-700 rounded">
                Delete</button>

            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }

      </Table>
    </div>
  )
}

export default ManageBook