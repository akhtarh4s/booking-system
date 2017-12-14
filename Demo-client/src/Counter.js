import React from 'react';


export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.start,
      buttonPaused: false
    };
  }

  componentDidMount() {
    if(this.props.decrement && this.props.decrement === true)
      setInterval(() => {
        if (this.state.buttonPaused===false) {
          this.setState({ number: this.state.number - 1 });
        }
      }, this.props.interval ? this.props.interval : 1000);
    else
      setInterval(() => {
        if (this.state.buttonPaused===false) {
          this.setState({ number: this.state.number + 1 });
        }
      }, this.props.interval ? this.props.interval : 1000);
  }

  onButtonClick = () => {
    this.setState({
      buttonPaused: !this.state.buttonPaused
    });
  }


  render() {
    return (
      <div>
        {this.state.number}
        <button onClick={this.onButtonClick}>{this.state.buttonPaused ? "Paused": "Pause"}</button>
      </div>
    );
  }
}
