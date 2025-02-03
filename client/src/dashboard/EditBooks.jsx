import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {title, author, imageURL, category, bookPDFURL} = useLoaderData()

  const bookCategory = [
    "Fiction",
    "Non Fiction",
    "Romance",
    "Fantasy",
    "Science Fiction",
    "Horror",
    "Mystery",
    "Memoir",
    "History",
    "Children",
    "Travel",
    "Music"
  ]

  const [selectedCategory, setSelectedCategory] = useState(bookCategory[0]);

  const handleChangeSelectedValue = (e) => {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  };

  // uploading book
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj ={
      title, author, imageURL, category, bookPDFURL
    }
    console.log(updateBookObj);

    // update book data
    fetch(`http://localhost:3000/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
        alert("Book Updated Successfully");
        // form.reset()
    })

  }

 

  return (
    <div className=' px-4 my-12'>
      <h2 className=' mb-8 text-3xl font-bold'>Update Book data</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleUpdate}>
        {/* first row */}
      <div className=" flex gap-8">
      <div className=" lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="title" value="Book Title" />
        </div>
        <TextInput id="title" type="text" placeholder="Book Title" required defaultValue={title} />
      </div>

      <div className=" lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="author" value="Author Name" />
        </div>
        <TextInput id="author" type="text" placeholder="Author Name" required defaultValue={author} />
      </div>
      
      </div>

      {/* second row */}

      <div className=" flex gap-8">
      <div className=" lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" type="text" placeholder="URL" required defaultValue={imageURL} />
      </div>

      <div className=" lg:w-1/2">
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>

        <Select id="inputState" name="category" className=" w-full rounded" value={selectedCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategory.map((option) => <option key={option} value={option}>{option}</option>)
          }
          
        </Select>
      </div>
      
      </div>

      {/* book-description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" placeholder="Write your book description here..." required rows={4} className=" w-full"/>
      </div>

      {/* book PDF link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" type="text" placeholder="Paste here" required name="bookPDFURL" defaultValue={bookPDFURL}/>
      </div>

      <Button type="submit" className=" mt-5 w-1/4">Update</Button>
      
    </form>
      
    </div>
  )
}

export default EditBooks