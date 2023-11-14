import React, { useEffect, useState } from 'react';
import Sectiontittle from './Sectiontittle';
import Popularitems from './Popularitems';
import Usemenu from '../Hooks/Usemenu';


const Formmenu = () => {

    const [menu] = Usemenu();
    const popular = menu.filter(item => item.category === 'popular') 
    // from custome hook
    



    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popular = data.filter(item => item.category === 'popular')
    //             setMenu(popular)
    //             console.log(popular);
    //         })


    // }, [])

    return (
        <div>
            <section>
                <Sectiontittle
                    tittle={"---Check it out---"}
                    subtittle={"FROM OUR MENU"}
                >

                </Sectiontittle>
            </section>

            <div className='grid grid-cols-2 gap-5 items-center p-4'>
                
            {
                popular.map(popularmenu => <Popularitems key={popularmenu._id} popularmenu={popularmenu}></Popularitems>)
            }
            </div>
        </div>
    );
};

export default Formmenu;