import React from 'react';

import './index.css';
import Pitch from '../pitch';
import Staircase from '../staircase';

function Wall(props) {
  return (
    <React.Fragment>
      <p>wall works!</p>
      <Pitch />
      <Staircase />
    </React.Fragment>
  );
}

export default Wall;
