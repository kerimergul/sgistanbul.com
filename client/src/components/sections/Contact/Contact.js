import React from 'react';

import Section from '../../../HOC/Section';

const contact = () => {
  return (
    <Section id='contact'>
      <div className='container pt-2 pb-5'>
        {/* <div className='section-header pt-0 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Contact </span>Us
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div> */}
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Bize </span>Ulaşın
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
          S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='İsim'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control rounded-0'
                    aria-describedby='emailHelp'
                    placeholder='E-mail'
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control rounded-0'
                    rows='5'
                    placeholder='Mesajınız'
                  />
                </div>
                <div className='form-group text-center'>
                  <button className='btn btn-block btn-primary rounded-0 mr-auto ml-auto'>
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default contact;
