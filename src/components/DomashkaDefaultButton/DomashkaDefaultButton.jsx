import React, { Component } from "react";

class DomashkaDefaultButton extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Stepan',
      age: 25
    };
  }

  onButtonClickHandler = () => {
    this.setState({
      name: 'Mykola',
      age: 30
    })
  }

  render() {
    const {
      name,
      age
    } = this.state;

    return (
      <div>
        <p>Name: {name}, age: {age}</p>
        <button onClick={this.onButtonClickHandler}>Click on me</button>
      </div>
    )
  }
}

export default DomashkaDefaultButton;
