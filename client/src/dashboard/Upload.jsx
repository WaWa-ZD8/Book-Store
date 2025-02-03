import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

const Upload = () => {
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
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const author = form.author.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj ={
      title, author, imageURL, category, bookPDFURL
    }
    console.log(bookObj);

     // send data to database
     fetch('http://localhost:3000/upload', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("Book Uploaded Successfully!")
      form.reset()
    });
  }

 

  return (
    <div className=' px-4 my-12'>
      <h2 className=' mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleBookSubmit}>
        {/* first row */}
      <div className=" flex gap-8">
      <div className=" lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="title" value="Book Title" />
        </div>
        <TextInput id="title" type="text" placeholder="Book Title" required />
      </div>

      <div className=" lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="author" value="Author Name" />
        </div>
        <TextInput id="author" type="text" placeholder="Author Name" required />
      </div>
      
      </div>

      {/* second row */}

      <div className=" flex gap-8">
      <div className=" lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" type="text" placeholder="URL" required />
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
        <TextInput id="bookPDFURL" type="text" placeholder="Paste here" required name="bookPDFURL" />
      </div>

      <Button type="submit" className=" mt-5 w-1/4">Upload Book</Button>
      
    </form>
      
    </div>
  )
}

export default Upload