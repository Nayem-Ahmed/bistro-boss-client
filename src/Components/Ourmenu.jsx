import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import cimg from '../assets/banner3.jpg'
import Usemenu from '../Hooks/Usemenu';
import MenuCategory from '../Shared/MenuCategory';
import Sectiontittle from '../Shared/Sectiontittle';
import chefservice from '../assets/chef-service.jpg'
 

 

const Ourmenu = () => {
    const [menu] = Usemenu();
    const offered = menu.filter(item => item.category === 'offered') 
    const dessert = menu.filter(item => item.category === 'dessert') 
    const salad = menu.filter(item => item.category === 'salad') 
    // from custome hook
    return (
        <div className=''>
           <Helmet>
            <title>Bitro Boss | Menu</title>
           </Helmet>

           <Cover
           img={cimg}
           heading1={'OUR MENU'}
           heading2={'Would you like to try a dish?'}
           ></Cover>
           <Sectiontittle tittle={"---Don't miss---"} subtittle={"TODAY'S OFFER"}></Sectiontittle>
 
            <MenuCategory popularmenu={offered}></MenuCategory>
            <Cover
           img={chefservice}
           heading1={'DESSERTS'}
           heading2={'Would you like to try a dish?'}
           ></Cover>
             <MenuCategory popularmenu={dessert}></MenuCategory>
            <Cover
           img={chefservice}
           heading1={'salad'}
           heading2={'Would you like to try a dish?'}
           ></Cover>
             <MenuCategory popularmenu={salad}></MenuCategory>

        
        </div>
    );
};

export default Ourmenu;