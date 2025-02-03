import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/banner-books/awardbooks.png'

const PromoBanner = () => {
  return (
    <div className=' bg-teal-100 mt-16 py-12 px-4 lg:px-24'>
        <div className=' flex flex-col md:flex-row justify-between items-center gap-12 '>
            <div className=' md:w-1/2'> 
                <h2 className=' text-4xl font-bold mb-6 leading-snug'>2025 National Book Awards for Fiction Shortlist</h2>

                <Link to= '/shop' className=' block'><button className=' bg-blue-700 px-3 py-2 rounded
          hover:bg-black text-white font-bold transition-all duration-300'>Get Promo Code</button></Link>
            </div>
            <div className=' w-96'>
                <img src= {pic} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default PromoBanner