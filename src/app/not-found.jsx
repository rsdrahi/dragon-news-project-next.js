import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center flex-col space-y-4'>
      <h2 className='font-bold text-4xl text-gray-500'>This is Page is Not Found</h2>
      <Link href="/">
        <button className='btn btn-ghost'>Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;