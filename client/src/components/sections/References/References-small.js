import React from 'react';

import Section from '../../../HOC/Section';
import Carousel from "react-elastic-carousel";
import Item from "../../UI/Carousel/Item.js";
import "../../../css/partial/referans.css";
import items from "../../../json/ref.json"
const breakPoints = [   
    { width: 768, itemsToShow: 3 , itemsToScroll: 2},   
];
const referenceSmall = () => {
    return (        
            <div className='container pt-2 pb-5'>   
                <div className='section-content'>
                    <div className="carousel-wrapper">
                        <Carousel
                            breakPoints={breakPoints}
                            enableAutoPlay={true}
                            autoPlaySpeed={1500}
                            pagination={false}
                            className='carousel'
                            disableArrowsOnEnd={false}
                            showArrows={false}

                        >
                            {items.map((item, index) => (
                                <li style={{ listStyle: 'none', justifyContent: 'center', alignItems: 'center' }} key={index}>
                                    <img width={'auto'} height={40} src={item} alt=''></img>
                                </li>
                            ))}
                        </Carousel>
                    </div>
                    <div className="carousel-wrapper">
                        <Carousel
                            breakPoints={breakPoints}
                            enableAutoPlay={true}
                            autoPlaySpeed={1500}
                            pagination={false}
                            className='carousel'
                            disableArrowsOnEnd={false}                            
                            initialFirstItem={25}
                            showArrows={false}

                        >
                            {items.map((item, index) => (
                                <li style={{ listStyle: 'none', justifyContent: 'center', alignItems: 'center' }} key={index}>
                                    <img width={'auto'} height={40} src={item} alt=''></img>
                                </li>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>        
    );
};

export default referenceSmall;
