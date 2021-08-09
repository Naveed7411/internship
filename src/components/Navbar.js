import React from 'react'
import   { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

const  Navbar = ({ toggle }) =>{ 
 
    return (
        <>
     



        <nav className="bg-gray-800  ">
     
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pl-8">
      
    <div className="relative flex items-center justify-between h-16">
   
      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex-shrink-0 flex items-center ">
          <Link to='/Home'>
          <img className="mx-auto h-12 w-auto" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="Try Again"/>
           
          </Link>
        </div>
       
      </div>
      
      <div className="hidden sm:block sm:ml-6">
          
          <div className="flex space-x-4 ">
            
            <Link to='/' className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-red-700" aria-current="page">Home</Link>

            <Link to='/menu' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 hover:bg-red-700 rounded-md text-sm font-medium">Menu</Link>

            <Link to='/about' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 hover:bg-red-700 rounded-md text-sm font-medium">About</Link>

            <Link to='/contact' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 hover:bg-red-700 rounded-md text-sm font-medium">Contact</Link>
          </div>
        </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0  ">
        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">View notifications</span>
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
        </button>
 
         
      </div>
      <nav className='flex justify-between items-center ml-5 h-16 bg-white text-black
        relative shadow-sm font-mono 'role='navigation'  onClick={toggle}>
             
            <div className="px-4 cursor-pointer  ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>

            </div>
            </nav>
    </div>
  </div>

 
 
</nav>
        </>
        
    )

    };
export default Navbar
