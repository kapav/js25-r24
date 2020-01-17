import React from 'react';

import './index.css';
import Slab from '../slab';
import Wall from '../wall';

class Storey extends React.Component {
  constructor(props) {
    super(props);
    this.tumblerFromSlab = this.tumblerFromSlab.bind(this);
  }

  tumblerFromSlab = function(e) {
    this.props.onStoreyToggle({...e});
  }

  render() {
    return (
      <React.Fragment>
        <p>storey works!</p>
        <Slab
          concealed={this.props.disguised}
          onSlabToggle={this.tumblerFromSlab} />
        <Wall />
      </React.Fragment>
    );
  }
}

export default Storey;
