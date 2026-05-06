import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
  return (
    <div>
      <h2 className='mb-6 font-bold text-lg'>Login With</h2>
      <div className='flex flex-col gap-2'>
        <button className='btn border-blue-500 text-blue-500'>
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className='btn'>
          <FaGithub></FaGithub>
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;