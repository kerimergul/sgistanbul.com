import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light' >
      <div className='container'>
        {/* <div className='d-flex '> */}
        <div className='d-flex pt-2 pb-2 justify-content-center'>
          <div className='d-flex mr-3'>
            <i class="fa-solid fa-location-dot mr-2"></i>
            <small>Dumlupınar, Barış Sk., 34720 Kadıköy/İstanbul</small>
          </div>
          <div className='d-flex mr-3'>
            <i className='fas fa-phone-alt mr-2' />
            <small>+90 (532) 445 16 88</small>
          </div>
          <div className='d-flex mr-3'>
            <i className='fas fa-envelope mr-2' />
            <small>info@sgglobal.com.tr</small>
          </div>
          <div className='social-media d-flex mr-3'>
            <a href='https://www.linkedin.com/company/s-g-global-consultancy/' target="_blank" className='text-light'>
              <i className='fab fa-linkedin-in mr-4' />
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default topBar;
