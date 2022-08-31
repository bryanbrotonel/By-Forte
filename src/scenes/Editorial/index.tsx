import React from 'react';

function Editorial() {
  return (
    <div className="md:h-full flex flex-col items-center gap-8 mx-4 py-12">
      <img
        src="https://source.unsplash.com/Qid2PBGeJmc/640x480"
        alt="Editorial Image"
        className="h-96 w-96 aspect-square object-cover bg-gray-100"
        loading="lazy"
      />
      <div className="md:w-96 text-center uppercase">
        <h1 className=" text-xl font-semibold mb-2">Editorial</h1>
        <h2>Coming Soon</h2>
      </div>
    </div>
  );
}

export default Editorial;
