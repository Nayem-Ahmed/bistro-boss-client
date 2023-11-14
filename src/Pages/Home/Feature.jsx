import React from 'react';
import Sectiontittle from '../../Shared/Sectiontittle';
import feature from '../../assets/feature.jpg'

const Feature = () => {
    return (

        <div className='p-3 mb-4 ' style={{
            background: 'linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%), url("https://i.ibb.co/d5W9rWs/feature.jpg")',
            backgroundSize: 'cover',
            backgroundAttachment:"fixed"
 
        }}>
 
                <section>
                    <Sectiontittle
                        tittle={'---Check it out---'}
                        subtittle={'FROM OUR MENU'}

                    ></Sectiontittle>
                </section>
                <div className='flex gap-4 justify-center items-center max-w-xl mx-auto'>
                    <div >
                        <img className='' src={feature} alt="" />
                    </div>
                    <div className='text-white'>
                        <p>March 20, 2023<br></br>
                            WHERE CAN I GET SOME?<br></br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline btn-info border-0 border-b-2 mt-3">Read More</button>

                    </div>
                </div>
            </div>
 



    );
};

export default Feature;