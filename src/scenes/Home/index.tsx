import React from 'react';

function Home() {
  return (
    // 65px is the height of the navbar
    <div className="h-[calc(100vh_-_65px)]">
      {/* <div className="absolute top-0 w-full h-screen bg-green-100 -z-50"> */}
      <div className="flex h-full justify-center pt-24">
        <div className="space-y-4 px-4">
          <img
            src="https://unsplash.com/photos/sQDTLNp0Cp0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8dmFuY291dmVyJTIwc2t5bGluZXxlbnwwfHx8fDE2NjE0MDA5MzI&force=true&w=640"
            alt=""
            className="mx-auto"
          />
          <div className="text-center max-w-lg mx-auto">
            <h1 className="text-xl uppercase font-semibold mb-2">
              Fall/Winter 2022
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              architecto nesciunt veniam hic quod cum? Ducimus expedita ipsum
              minus ratione, laborum, iure.
            </p>
            <div className="mt-4">
              <a href="shop" className="font-bold uppercase hover:underline">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
