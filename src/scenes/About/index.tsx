import React from 'react';

function About() {
  return (
    <div className="md:h-full flex flex-col md:flex-row md:justify-center items-center gap-8 mx-4 py-12 md:-py-0">
      <img
        src="https://unsplash.com/photos/UxK-LXQraJ4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzV8fHZhbmNvdXZlciUyMHNob3B8ZW58MHx8fHwxNjYxMzA4NDI2&force=true&w=640"
        alt="Random Placeholder"
        className="h-96 w-96 aspect-square object-cover"
      />
      <div className="md:w-96">
        <h1 className="uppercase text-xl font-semibold mb-1">About</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ad
          animi, enim recusandae quasi aliquid molestias praesentium iure
          corporis in mollitia voluptatibus unde nesciunt voluptas libero est
          soluta ipsum quibusdam.
        </p>
      </div>
    </div>
  );
}

export default About;
