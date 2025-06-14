import React, { useContext, useEffect, useState } from 'react'
import { Link, Links } from 'react-router-dom';

// react-Icons
import { FaBlog } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';
import proPic from '../assets/banner-books/profile.jpg'
import { Avatar } from 'flowbite-react';

 const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isSticky, setisSticky] = useState(false);

    const {user} = useContext(AuthContext);
    console.log(user)

    // toggle menu
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleScroll = () =>{
            if(window.scrollY > 100){
                setisSticky(true);
            }
            else{
                setisSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.addEventListener("scroll", handleScroll);
        }
    }, [])

    // nav items
    const navItems = [
        {link: "Home", path: "/"},
        {link: "About", path: "/about"},
        {link: "Shop", path: "/shop"},
        {link: "Sell Your Book", path: "/admin/dashboard"},
        {link: "Blog", path: "/blog"},
    ]

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                <FaBlog className='inline-block' />Books</Link>

                {/* nav items for larger devices */}

                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => 
                            <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                                {link}
                                </Link> 
                                )
                    }
                
                </ul>

                {/* btn for lg devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBars className='w-5 hover:text-blue-700' /></button>

                    {/* checking user */}
                    {
                        user? <Link to= "/admin/dashboard"><Avatar img= {user.photoURL} 
                        alt="avatar of Jese" 
                        rounded className=' w-10 mb-4 m-auto cursor-pointer' /> </Link>: ""
                    }
                </div>
                
                {/* menu btn for mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            isMenuOpen? <FaXmark className='h-5 w-5 text-black'/> 
                            : <FaBars className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
            </div>

            {/* nav items for sm devices */}
            <div className={`space-y-4 px-4 py-7 mt-16 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" :"hidden"}`}>
            {
            navItems.map(({link, path}) => 
                        <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-white'>
                            {link}
                            </Link> 
                            )
                            }

            </div>
        </nav>
    </header>
  )
}

export default Navbar;