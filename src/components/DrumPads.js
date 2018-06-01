import React from 'react';
import DrumPad from './DrumPad';

const DrumPads = (props) => (
  <div id='drum-pads'>
    <DrumPad on={props.on} audio={props.pads[0]} volume={props.volume} />
    <DrumPad on={props.on} audio={props.pads[1]} volume={props.volume} />
    <DrumPad on={props.on} audio={props.pads[2]} volume={props.volume} />
    <DrumPad on={props.on} audio={props.pads[3]} volume={props.volume} />
    <DrumPad on={props.on} audio={props.pads[4]} volume={props.volume} />
    <DrumPad on={props.on} audio={props.pads[5]} volume={props.volume} />
    <DrumPad on={props.on} audio={props.pads[6]} volume={props.volume} />
    <DrumPad on={props.on} audio={props.pads[7]} volume={props.volume} />
    <DrumPad on={props.on} audio={props.pads[8]} volume={props.volume} />
  </div>
)

export default DrumPads;