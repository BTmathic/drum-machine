import React from 'react';
import DrumPad from './DrumPad';

const DrumPads = (props) => (
  <div id='drum-pads'>
    {props.pads.map((pad) =>
      <DrumPad key={pad.description}
        on={props.on}
        audio={pad}
        volume={props.volume}
        handleChangeDescription={props.handleChangeDescription}
      />)}
  </div>
)

export default DrumPads;