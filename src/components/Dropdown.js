import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-gray-200'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4 hover:bg-red-700'>
        Home
      </Link>
      <Link to='/menu' className='p-4 hover:bg-red-700'>
        Menu
      </Link>
      <Link to='/about' className='p-4 hover:bg-red-700'>
        About
      </Link>
      <Link to='/contact' className='p-4 hover:bg-red-700'>
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;