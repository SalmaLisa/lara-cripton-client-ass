import React from 'react';

const Spinner = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <progress className="progress w-16"></progress>
    </div>
  );
};

export default Spinner;