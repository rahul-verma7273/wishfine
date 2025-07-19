import React from "react";
import Header from './header';
import Footer from './footer';
import Crousel from './crousel';
import Mains from './mains';

const Home = () => {
  return (
    <>
      <Header />
    
      <main>
       <Crousel/>  
       <Mains/>  
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
