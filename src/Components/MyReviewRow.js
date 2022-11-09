import React from 'react';


const MyReviewRow = ({ review ,handleDelete}) => {
  const { _id, serviceTitle, email, photoURL, message, currentDate } = review
  
  
  return (
    <div >
      <tr className='border'>
        <th>
          <label onClick={()=>handleDelete(_id)} title='Delete' className='p-1 bg-base-200 rounded cursor-pointer'>
            ❌
          </label>
        </th>
        <div className='grid lg:grid-cols-12'>
        <td className='md:col-span-4 '>
          <div className="flex flex-col md:flex-row items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-circle rounded w-32 h-32 ">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceTitle}</div>
                <div className="text-sm opacity-50">{currentDate}</div>
            </div>
          </div>
        </td>
        <td className=' col-span-5  flex items-center'>
            <span>
            {message}
        </span>
        </td>
        <td className='col-span-2 flex items-center'><span>{email}</span></td>
        <th className='col-span-1 flex items-center'>
          <button className="bg-gradient-to-br from-pink-300 to-teal-200 py-1 px-5 rounded">Edit</button>
        </th>
       </div>
      </tr>
  
    </div>
  );
};

export default MyReviewRow;