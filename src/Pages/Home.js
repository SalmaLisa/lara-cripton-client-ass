import React from 'react';
import LimitedService from '../Components/LimitedService';
import { useTitle } from '../Hooks/useTitle';


const Home = () => {
  useTitle('Home')
  return (
    <div>
      <LimitedService></LimitedService>
      
    </div>
  );
};

export default Home;