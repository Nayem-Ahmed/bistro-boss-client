import React, { useState } from 'react';
import Cover from '../Shared/Cover';
import banner2 from '../assets/banner2.jpg'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Usemenu from '../Hooks/Usemenu';
import Shopcard from './Shopcard';
import ShoptabMap from './ShoptabMap';

const Ourshop = () => {
    const [tabindex,setTabindex] = useState(0)
    const[menu] = Usemenu();
    const salad = menu.filter(item => item.category === 'salad') 
    const pizza = menu.filter(item => item.category === 'pizza') 
    const soup = menu.filter(item => item.category === 'soup') 
    const dessert = menu.filter(item => item.category === 'dessert') 
    const offered = menu.filter(item => item.category === 'offered') 
    return (
        <div>
            <Cover
                img={banner2}
                heading1={'OUR SHOP'}
                heading2={'Would you like to try a dish?'}
            ></Cover>
            <Tabs defaultIndex={tabindex} onSelect={(index) => setTabindex(index)}>
                <TabList className={"flex justify-center items-center mt-5 mb-3"} >
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel >
                    <ShoptabMap items={salad}></ShoptabMap>
                    </TabPanel>
                <TabPanel>
                <ShoptabMap items={pizza}></ShoptabMap>
                </TabPanel>
                <TabPanel>
                <ShoptabMap items={soup}></ShoptabMap>
                </TabPanel>
                <TabPanel>
                <ShoptabMap items={dessert}></ShoptabMap>
                </TabPanel>
                <TabPanel>
                <ShoptabMap items={offered}></ShoptabMap>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Ourshop;