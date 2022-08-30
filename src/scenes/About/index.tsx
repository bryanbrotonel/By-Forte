import React from 'react';

function About() {
  return (
    <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 mx-4 py-12 md:-py-0">
      <img
        src="https://unsplash.com/photos/UxK-LXQraJ4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzV8fHZhbmNvdXZlciUyMHNob3B8ZW58MHx8fHwxNjYxMzA4NDI2&force=true&w=640"
        alt="Random Placeholder"
        className="h-96 w-96 aspect-square object-cover"
        loading="lazy"
      />
      <div className="md:w-[32rem] prose">
        <h1 className="uppercase text-xl font-bold mb-1">About</h1>
        <p>By Forte is a streetwear brand based in Vancouver, Canada.</p>
        <p>
          We represent what it means to bring the ideas that we visualize in our
          minds to life. By Forte embraces the creative process by creating in
          silence and let our products speak for themselves.
        </p>
        <p className='font-semibold'>Prosper Through Noise</p>
      </div>
    </div>
  );
}

export default About;
