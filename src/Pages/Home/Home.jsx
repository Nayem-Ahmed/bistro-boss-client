import React from 'react';
import Banner from './Banner';
import Sweeper from './Sweeper';
import Chefimg from './Chefimg';
import Formmenu from '../../Shared/Formmenu';
import Feature from './Feature';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bitro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Sweeper></Sweeper>
            <Chefimg></Chefimg>
            <Formmenu></Formmenu>
            <Feature></Feature>
        </div>
    );
};

export default Home;