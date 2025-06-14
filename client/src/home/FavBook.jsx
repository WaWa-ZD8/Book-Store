import React from 'react';
import favBook from '../assets/banner-books/favoritebook.jpg'
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className=' px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-10'>
        <div className=' md:w-1/2'>
            <img src= {favBook} alt='' className=' rounded md:w-10/12'></img>
        </div>

        <div className=' md:w-1/2 space-y-6'>
        <h2 className=' text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite<span 
        className=' text-blue-700'> Book Here!</span></h2>
        
        <p className=' mb-10 text-lg md:w-5/6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Eius, impedit nostrum! Qui nesciunt blanditiis beatae,
         ipsam excepturi perferendis exercitationem autem quam pariatur
          aperiam architecto veritatis amet assumenda magnam quis molestiae.
         </p>
         {/* stats */}
         <div className=' flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className=' text-3xl font-bold'>800+</h3>
                <p className=' text-base'>Book Listing</p>
            </div>
            <div>
                <h3 className=' text-3xl font-bold'>1500+</h3>
                <p className=' text-base'>Regiter Users</p>
            </div>
            <div>
                <h3 className=' text-3xl font-bold'>1200+</h3>
                <p className=' text-base'>PDF Downloads</p>
            </div>
         </div>

         <Link to= '/shop' className=' mt-8 block'><button className=' bg-blue-700 px-3 py-2 rounded
          hover:bg-black text-white font-bold transition-all duration-300'>Explore More</button></Link>

        </div>

    </div>
  )
}

export default FavBook