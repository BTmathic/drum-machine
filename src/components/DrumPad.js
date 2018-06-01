import React from 'react';

export default class DrumPad extends React.Component {

  play = () => {
    if (this.props.on) {
      this.refs.audio.volume = this.props.volume/100;
      this.refs.audio.play();
    }
  }

  handleKeyPress = (e) => {
    e.preventDefault(); // Probably not necessary, but just in case
    const keyName = e.key;
    if (keyName === this.props.audio.keyTrigger) {
      this.play();
    }
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return (
      <div className='drum-pad' id='audio-clip-description' onClick={() => { this.play(this.refs) }}>
        <audio className='clip'
          id={this.props.keyTrigger}
          src={this.props.audio.url}
          ref='audio'
        >
          Your browser does not support the audio element
        </audio>
        {this.props.audio.keyTrigger.toUpperCase()}
      </div>
    );
  }
}