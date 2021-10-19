import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Home_Services/Services/Services';
import Donor from '../Powered_by/Donor';
import Volunteers from '../Volunteers/Volunteers';

import './Home.css';

const Home = () => {
    return (
     <div>        
        <Banner></Banner>
        <Services></Services>
        <Volunteers></Volunteers>
       <Donor></Donor>

        </div>
    );
};

export default Home;