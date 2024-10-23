import React from 'react';
import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';
import JsonText from '../../../json/aboutText.json';

const about = (props) => {
  let type = props.location.pathname;
  let data = JsonText[type];
  let ref = null;
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
            {data["header-title"]}
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            {data["header-text"]}
          </h6>
        </div>
        <div className='section-content'>
          <div className='row justify-content-end mr-5'>
            <h3 className='about-title mb-4 mr-5'>{data["topic-title"]}</h3>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-12 col-lg-6 mb-6 '>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6 mb-6'>
              <div className='about-description'>
                <p id='text' ref={ref} style={{ whiteSpace: "pre-wrap" }}>
                  {data["topic-text"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>     
    </Section>
  );
};

export default about;
