import React from 'react';

import './index.css';

function Gable(props) {
  return (
    <React.Fragment>
      <p>gable works!</p>
      {!props.depict.lurked &&
        <div>
          {props.depict.buryInscription || 'Первичная надпись'}
        </div>
      }
      {props.depict.lurked &&
        <div>
          {props.depict.evinceNotice}
        </div>
      }
    </React.Fragment>
  );
}

export default Gable;
