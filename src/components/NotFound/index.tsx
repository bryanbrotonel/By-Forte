import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  let navigate = useNavigate();
  const onClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="text-center mt-48 space-y-12">
      <div>
        <p className="uppercase font-bold text-5xl mb-4">Not Found</p>
        <p>This page does not exist.</p>
      </div>
      <button
        onClick={onClick}
        className="py-4 px-5 bg-black hover:bg-black/70 text-white"
      >
        Return to Home
      </button>
    </div>
  );
}

export default NotFound;
