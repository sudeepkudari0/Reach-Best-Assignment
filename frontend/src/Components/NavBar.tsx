import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='flex flex-col w-full bg-black font-Nunito'>
      <div className='flex flex-row justify-between p-2 pl-4'>
        <div className='flex'>
          <Link to='/'>
            <h1 className='text-3xl text-white font-Great'>Book Matching App</h1>
          </Link>
        </div>
        <div className='sm:hidden absolute right-0 mt-1 mr-2'>
          <IoMenu onClick={toggleMenu} className='text-white' size={30}/>
        </div>
        <div
          className={`sm:hidden ${menuVisible ? 'flex flex-col items-center gap-4 p-2 mt-10 relative right-[160px] h-[200px]' : 'hidden'}`}
        >
          <Link to='/analysis' onClick={toggleMenu}>
            <h1 className='text-2xl text-white right-10'>Analysis</h1>
          </Link>
          <Link to='/students' onClick={toggleMenu}>
            <h1 className='text-2xl text-white'>Students</h1>
          </Link>
          <Link to='/books' onClick={toggleMenu}>
            <h1 className='text-2xl text-white'>Books</h1>
          </Link>
          <Link to='/books' onClick={toggleMenu}>
            <h1 className='text-2xl text-gray-600'>Sign out</h1>
          </Link>
        </div>
        <div className='hidden sm:flex flex-row justify-center gap-8'>
          <div>
            <Link to='/analysis'>
              <h1 className='text-2xl text-white'>Analysis</h1>
            </Link>
          </div>
          <div>
            <Link to='/students'>
              <h1 className='text-2xl text-white'>Students</h1>
            </Link>
          </div>
          <div>
            <Link to='/books'>
              <h1 className='text-2xl text-white'>Books</h1>
            </Link>
          </div>
          <div>
            <Link to='/'>
              <h1 className='text-2xl text-gray-600'>Sign out</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
