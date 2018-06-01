import React from 'react';
import Slider from 'react-rangeslider';
import DrumPads from './DrumPads';
import pads from '../audio/drumPads';

export default class DrumMachine extends React.Component {
  state = {
    on: true,
    volume: 80
  }

  handleChange = (volume) => {
    this.setState(() => ({ volume }));
  };

  togglePower = () => {
    this.setState((prevState) => ({ on: !prevState.on }));
  };

  render() {
    return (
      <div id='drum-machine'>
        <DrumPads on={this.state.on} pads={pads} volume={this.state.volume} />
        <div id='power-button' onClick={() => {this.togglePower()}}>
          Power
        </div>
        <div id='controls'>
          <div id='audio-play-description'>
            {this.props.on && 'Description'}
          </div>
          <div id='volume'>
            <div className='slider'>
              <Slider
                min={0}
                max={100}
                tooltip={false}
                value={this.state.volume}
                onChange={this.handleChange}
              />
              <p>Volume: <span id='volume'>{this.state.volume}</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}