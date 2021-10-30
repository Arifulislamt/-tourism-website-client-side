import React from 'react';
import About from '../About/About';
import Packages from '../AllPackages/Packages/Packages';
import Banner from '../Banner/Banner';
import TravellerSay from '../TravellerSay/TravellerSay';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <About></About>
            <TravellerSay></TravellerSay>
        </div>
    );
};

export default Home;