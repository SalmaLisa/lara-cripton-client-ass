import React from 'react';
import About from '../Components/About';
import Banner from '../Components/Banner';
import GoodParenting from '../Components/GoodParenting';
import LimitedService from '../Components/LimitedService';
import Stats from '../Components/Stats';
import { useTitle } from '../Hooks/useTitle';


const Home = () => {
  useTitle('Home')
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <LimitedService></LimitedService>
      <Stats></Stats>
      <GoodParenting></GoodParenting>
    </div>
  );
};

export default Home;