import React from 'react';
import DrumPad from './DrumPad';

const DrumPads = () => (
  <div id='drum-pads'>
    <DrumPad keyTrigger={'Q'} />
    <DrumPad keyTrigger={'W'} />
    <DrumPad keyTrigger={'E'} />
    <DrumPad keyTrigger={'A'} />
    <DrumPad keyTrigger={'S'} />
    <DrumPad keyTrigger={'D'} />
    <DrumPad keyTrigger={'Z'} />
    <DrumPad keyTrigger={'X'} />
    <DrumPad keyTrigger={'C'} />
  </div>
)

export default DrumPads;