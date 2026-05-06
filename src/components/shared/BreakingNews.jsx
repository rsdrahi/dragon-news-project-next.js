import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    _id: "1",
    tittle: "Breaking News: Major Event Unfolds in The City",
  },
  {
    _id: "2",
    tittle: "Breaking News: New Policy Announced in The Government",
  },
  {
    _id: "3",
    tittle: "Breaking News: Arsenal Go To The Champions League Final",
  }
]

const BreakingNews = () => {
  return (
    <div className='flex justify-between items-center bg-gray-200 p-4 px-2 container mx-auto'>
      <button className='btn bg-pink-500 text-white'>Latest</button>
      <Marquee pauseOnHover={true} speed={70}>
        <div>
          {
            news.map(n =>
              <span className='mr-12' key={n._id}>{n.tittle}</span>
            )
          }
        </div>
      </Marquee>
    </div>
  );
};

export default BreakingNews;