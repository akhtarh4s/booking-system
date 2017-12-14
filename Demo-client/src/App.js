import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import Counter from './Counter';
import Input from './Input';
import TemperatureChart from './TemperatureChart';

const MyOtherComponent = () => {
  return <div>This is my other component!</div>
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gcag: []
    }
  }

  async componentDidMount() {

    try {
      const response = await fetch("http://localhost:3000/data.json");
      const json = await response.json();

      this.setState({
        gcag: json.filter((element) => element.Source === "GCAG")
      });
    }
    catch(e) {
      console.log('Failed!');
    }
  }

  render() {
    return (
      <div className="App">
        <MyComponent name="My First Component"/>
        <MyComponent name="Hassan" favouriteColor="green" />
        <MyComponent name="Daniel" favouriteColor="purple" />
        <MyComponent name="asdlkajskdlja" favouriteColor="yellow" />
        <Counter start={10} decrement={true} />
        <Counter start={5} />
        <Counter start={5} interval={500} />
        <MyOtherComponent color="red" />
        <TemperatureChart data={this.state.gcag} />
        <Input />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
