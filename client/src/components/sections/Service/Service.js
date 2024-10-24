import React from 'react';

import Section from '../../../HOC/Section';

const Service = () => {
  return (
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        {/* <div className='section-header pt-0 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Services
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div> */}
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            Hizmetlerimiz
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-4 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-briefcase' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>SGK</h5>
                  <p className='service-description'>
                    S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i className='fas fa-briefcase' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Vergi</h5>
                  <p className='service-description'>
                    S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i className='fas fa-briefcase' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Devlet Teşvik ve Destek Hibeleri</h5>
                  <p className='service-description'>
                    S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                <i className='fas fa-briefcase' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Eğitim</h5>
                  <p className='service-description'>
                    S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
