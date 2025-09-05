import React from 'react';

function Card() {
  const carddata = [
    {
      pre: 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.',
      title: 'App dev',
      image: '/src/image/img101.jpg',
      btn: 'button'
    },
    {
      pre: 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.',
      title: 'Web dev',
      image: '/src/image/img102.jpg',
      btn: 'button'
    },
    {
      pre: 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.',
      title: 'Software dev',
      image: '/src/image/img103.jpg',
      btn: 'button'
    },
    {
      pre: 'Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document.',
      title: 'Game dev',
      image: '/src/image/img104.jpg',
      btn: 'button'
    },
   
  ];


  const ourServicesCard =  carddata.map((usercard) => (
          <div
            key={usercard.id}
            className="bg-white rounded-2xl shadow-xl  w-72 overflow-hidden transform transition-transform duration-300 hover:scale-105"
          > <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center p-5 underline">
              {usercard.title}
            </h3>
            <img
              className="w-full h-48 object-cover rounded-2xl p-2"
              src={usercard.image}
              alt={usercard.title}
            />
            <div className="p-5">

              <p className="text-sm text-gray-600 text-center"> {usercard.pre}</p>
              <div className="flex justify-center mt-4">
                <button className="cursor-pointer border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition duration-300">
                  {usercard.btn}
                </button>
              </div>
            </div>
          </div>
        ));


  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-200 to-yellow-300 px-8 py-18">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 ">Our Cards</h2>
      <div className="flex flex-wrap justify-center gap-1 ">
        {
        ourServicesCard
        }
      </div>
    </div>
  );
}

export default Card;
