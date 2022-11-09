import React from 'react';

const Spinner = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <progress className="progress w-12"></progress>
    </div>
  );
};

export default Spinner;