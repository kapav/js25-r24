import React from 'react';

import './index.css';

class Slab extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick = function(e) {
    const payload = {
      buryInscription: 'Скрываемая надпись',
      evinceNotice: 'Отображаемое уведомление'
    }

    payload.lurked = !this.props.concealed;
    this.props.onSlabToggle({...payload});
  }

  render() {
    return (
      <React.Fragment>
        <p>slab works!</p>
        <button
          type="button"
          onClick={this.onClick}
        >
          {this.props.concealed ? 'Скрыть' : 'Показать'}
        </button>
      </React.Fragment>
    );
  }
}

export default Slab;
