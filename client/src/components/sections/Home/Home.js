import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/home_bg.jpg';
import Link from '../../UI/Link/Link';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>S&G GLOBAL DANIŞMANLIK</h1>
            <h3 className='sub-title mb-4'>
              SGK | VERGİ | TEŞVİK | EĞİTİM
            </h3>
            <h6 className='sub-sub-title mb-4'>
              Tüm ihtiyaçlarınız için burdayız
            </h6>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
