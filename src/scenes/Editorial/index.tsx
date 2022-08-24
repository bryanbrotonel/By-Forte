import React from 'react';

function Editorial() {
  return (
    <div className="md:h-full flex flex-col items-center gap-8 mx-4 py-12">
      <img
        src="https://source.unsplash.com/Qid2PBGeJmc/640x480"
        alt="Random Placeholder"
        className="h-96 w-96 aspect-square object-cover"
        loading="lazy"
      />
      <div className="md:w-96 text-center">
        <h1 className="uppercase text-xl font-semibold mb-2">Editorial</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad
          animi, enim recusandae quasi.
        </p>
      </div>
    </div>
  );
}

export default Editorial;
