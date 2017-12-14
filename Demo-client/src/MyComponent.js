import React from 'react';

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  onDivClicked = () => {
    this.setState({
      color: this.props.favouriteColor
    });
  }

  render() {
    return <div style={{ color: this.state.color }} onClick={this.onDivClicked}>Hello {this.props.name}!</div>;
  }
}
