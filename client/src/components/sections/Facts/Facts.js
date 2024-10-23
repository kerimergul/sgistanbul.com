import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/facts_bg.jpg';

const Facts = () => {
  return (
    <Section id='facts'>
      <div
        className='facts-container'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='container pt-5 pb-4'>
          <div className='row'>
            <div className='col-sm-6 col-md-4 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-briefcase' />
              </div>
              <h4 className='facts-counter text-light'>+15000</h4>
              <h5 className='facts-title text-light'>İşyeri Sayısı</h5>
            </div>
            <div className='col-sm-6 col-md-4 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-users' />
              </div>
              <h4 className='facts-counter text-light'>+100000</h4>
              <h5 className='facts-title text-light'>Çalışan Sayısı</h5>
            </div>
            <div className='col-sm-6 col-md-4 text-center mb-4'>
              <div className='mb-2 facts-icon'>
                <i className='fas fa-money-bill' />
              </div>
              <h4 className='facts-counter text-light'>1 Milyar TL</h4>
              <h5 className='facts-title text-light'>Teşvik Tutarı</h5>
            </div>

          </div>
        </div>
      </div>
    </Section>
  );
};

export default Facts;
