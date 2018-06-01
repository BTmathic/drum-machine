import React from 'react';

export default class Controls extends React.Component {

  render() {
    return (
      <div id='controls'>
        <div id='power'>Power</div>
        <div id='audio-playing-description'>Description</div>
        <div id='volume'>Volume</div>
        <div id='sound-bank'>Bank</div>
      </div>
    );
  }
}