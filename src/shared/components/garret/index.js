import React from 'react';

import './index.css';
import Gable from '../gable';
import Slope from '../slope';

function Garret(props) {
  return (
    <React.Fragment>
      <Gable
        depict={{...props.portray}} />
      <Slope />
      <p>garret works!</p>
    </React.Fragment>
  );
}

export default Garret;
