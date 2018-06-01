import React from 'react';

export default class DrumPad extends React.Component {

  render() {
    return (
      <div className='drum-pad' id='audio-clip-description'>
        {this.props.keyTrigger}
      </div>
    );
  }
}