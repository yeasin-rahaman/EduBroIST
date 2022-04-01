import React from 'react';
import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';
import useFirebase from '../../../hooks/useFirebase';

import Services from '../Services/Services';
import HeroSection from '../HeroSection/HeroSection';
import Team from '../Team/Team';
import HomeBooks from '../HomeBooks/HomeBooks';


const Home = () => {
     const { handleClick } = useFirebase()
     return (
          <div onClick={handleClick}>

               <HeroSection></HeroSection>
               <Services />
               <HomeBooks></HomeBooks>
               <Team></Team>
               <Blogs></Blogs>
               <Counter />




          </div>
     );
};

export default Home;
