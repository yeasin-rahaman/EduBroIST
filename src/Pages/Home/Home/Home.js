import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
import Blogs from '../Blogs/Blogs';
import Counter from '../Counter/Counter';
import useFirebase from '../../../hooks/useFirebase';

import Services from '../Services/Services';
import HeroSection from '../HeroSection/HeroSection';


const Home = () => {
     const { handleClick } = useFirebase()
     return (
          <div onClick={handleClick}>

               <HeroSection></HeroSection>
               <Services />
               <AllReviews></AllReviews>
               <Blogs></Blogs>
               <Counter />




          </div>
     );
};

export default Home;
