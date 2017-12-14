import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      pwdValue: ''

    }
  }

  onChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  onPwdChange = (event) => {
    this.setState({
      pwdValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" value={this.state.value} onChange={this.onChange} />
        { this.state.value.length === 0 && <div>Please enter your name!</div> }
        <input type="text" placeholder="Password" value={this.state.pwdValue} onChange={this.onPwdChange} />
        { this.state.pwdValue.length === 0 && <div>Please enter your pwd!</div> }
        { this.state.pwdValue.length === 0 && this.state.value.length === 0 && <div>Please fill out the form!</div> }
      </div>
    );
  }
}
