import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '@/assets/user.png'
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className='flex justify-between container mx-auto mt-8'>
      <div></div>
      <ul className='flex justify-between items-center gap-4 text-gray-700'>
        <li>
          <NavLink href='/'>Home</NavLink>
        </li>
        <li>
          <NavLink href='/about'>About</NavLink>
        </li>
        <li>
          <NavLink href='/career'>Career</NavLink>
        </li>
      </ul>

      <div className='flex items-center gap-3'>
        <Image
          src={userAvatar}
          alt='User Avatar'
          height={40}
          width={40}
        >
        </Image>
        <button className='btn bg-gray-700 text-white px-6'>
          <Link href='/login'>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;