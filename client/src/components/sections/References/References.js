import React from 'react';

import Section from '../../../HOC/Section';
import Carousel from "react-elastic-carousel";
import Item from "../../UI/Carousel/Item.js";
import "../../../css/partial/referans.css";
import items from "../../../json/ref.json"
const breakPoints = [   
    { width: 768, itemsToShow: 3 , itemsToScroll: 2},   
];
const reference = () => {
    return (
        <Section id='about'>
            <div className='container pt-2 pb-5'>
                {/* <div className='section-header pt-0 pb-5 text-center'>
                    <h3 className='section-title'>
                        <span>Our </span>Company
                    </h3>
                    <h6 className='section-subtitle mr-auto ml-auto'>
                        Individualized quality care that meets the total needs of the
                        patient Individualized quality care that quality care that
                        Individualized quality care that meets the total.
                    </h6>
                </div> */}
                <div className='section-header pt-5 pb-5 text-center'>
                    <h3 className='section-title'>
                        Referanslarımız
                    </h3>
                    <h6 className='section-subtitle mr-auto ml-auto'>
                        
                    </h6>
                </div>
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
        </Section>
    );
};

export default reference;
