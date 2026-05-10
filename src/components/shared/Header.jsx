import React from 'react';
import logo from '../../assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className='text-center space-y-3 p-8'>
      <Image
        src={logo}
        width={300}
        height={200}
        alt='logo'
        className='mx-auto'
      >
      </Image>
      <p>Journalism Without Fear or Favour????? GitHub</p>
      <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;