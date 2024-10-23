import React from 'react';

import Link from '../Link/Link';

const footer = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>Hakkımızda</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  S&G Global S&G Global S&G Global S&G Global,
                  S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global S&G Global
                </small>
              </p>
              {/* <button className='btn btn-sm btn-primary rounded-0'>
                Daha fazla bilgi edinin
              </button> */}
            </div>
          </div>
          {/* <div className='col-sm-6 col-md-6 col-lg-2 mb-5'>
            <div className='footer-title'>
              <h6></h6>
            </div>
            <div className='footer-content'>
              <ul className='list-group quick-links'>
                <li>
                  <Link target='home' offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target='about'>About</Link>
                </li>
                <li>
                  <Link target='services'>Services</Link>
                </li>
                <li>
                  <Link target='blog'>Blog</Link>
                </li>
                <li>
                  <Link target='contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Latest News</h6>
            </div>
            <div className='footer-content'>
              <p>
                <small className='text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </small>
              </p>
              <p>
                <small className='text-muted'>
                  Pellentesque et pulvinar enim. Quisque at tempor ligula Natus
                  error sit voluptatem
                </small>
              </p>
              <p>
                <small className='text-muted'>accusantium doloremque</small>
              </p>
            </div>
          </div> */}
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Bize Ulaşın</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>Address : Dumlupınar, Barış Sk., 34720 Kadıköy/İstanbul</small>
              </p>
              <p className='text-muted'>
                <small>Telefon : +90 (532) 445 16 88</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : info@sgglobal.com.tr</small>
              </p>
              <div className='social-media mt-4'>
                <a href='https://www.linkedin.com/company/s-g-global-consultancy/' target="_blank" className='text-light'>
                  <i className='fab fa-linkedin-in mr-4' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-footer pt-3 pb-3 text-center'>
        <small>© All Right Reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
