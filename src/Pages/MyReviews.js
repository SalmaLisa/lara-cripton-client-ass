import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const {user}=useContext(AuthContext)
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user.email]);

  return (
    <div>
      
    </div>
  );
};

export default MyReviews;