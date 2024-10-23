import React from 'react';
import Section from '../../../HOC/Section';

const mapMarker = () => {
  return (
    <Section id='map'>
      <div>
        <iframe
          title='mapMarker'
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d188.21229217925105!2d29.05824780734024!3d40.99469020000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac74b35387229%3A0x35bf077e5ff0007f!2sS%26G%20Global%20Office!5e0!3m2!1sen!2str!4v1675171481509!5m2!1sen!2str'
          width='100%'
          height='450'
          frameBorder='0'
          style={{ border: 0, marginBottom: '-7px' }}
          allowFullScreen
        />
      </div>
    </Section>
  );
};

export default mapMarker;
