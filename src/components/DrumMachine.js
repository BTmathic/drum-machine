import React from 'react';
import Slider from 'react-rangeslider';
import DrumPads from './DrumPads';
import pads from '../audio/drumPads';

export default class DrumMachine extends React.Component {
  state = {
    on: true,
    volume: 80,
    description: ' '
  }

  handleChange = (volume) => {
    this.setState(() => ({ volume }));
  };

  handleChangeDescription = (description) => {
    this.setState(() => ({ description }));
  }

  togglePower = () => {
    this.setState((prevState) => ({ on: !prevState.on }));
  };

  render() {
    return (
      <div id='drum-machine'>
        <div id='top-bar'>
          <div id='power-light'></div>
          { this.state.on ? 
            <img id='speaker' src='./Images/speaker-on.png' alt='speaker-volume-icon' />
            : <img id='speaker' src='./Images/speaker.svg' alt='speaker-volume-icon' />
          }
          <div id='volume'>
            <div className='slider'>
              <Slider
                min={0}
                max={100}
                tooltip={false}
                value={this.state.volume}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div id='power-button' onClick={() => { this.togglePower() }}>
            <div>
              <p>{this.state.on ? 'ON' : 'OFF'}</p>
            </div>
          </div>
        </div>
        <div id='audio-play-description'>
          {this.state.on && this.state.description}
        </div>
        <div id='drum-machine-contents'>
          <DrumPads on={this.state.on}
            pads={pads}
            volume={this.state.volume}
            handleChangeDescription={this.handleChangeDescription}
          />
        </div>
      </div>
    );
  }
}