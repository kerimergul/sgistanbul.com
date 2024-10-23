import React, { Fragment } from 'react';

import RoutesLayout from '../Routes';
import Home from './Home/Home'
import MapMarker from './MapMarker/MapMarker';
import Facts from './Facts/Facts';
import ReferenceSmall from './References/References-small';

const sections = () => {
  return (
    <Fragment>
      {/* <RoutesLayout /> */}
      <Home/>
      <Facts/>
      <ReferenceSmall/>
      <MapMarker />
    </Fragment>
  );
};

export default sections;
