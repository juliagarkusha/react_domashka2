import React, { Component } from "react";

class DomashkaAccordionButton extends Component {
  constructor() {
    super();
    this.state = {
      isShowUserInfo: false
    }
  }

  onToggleUserInfo = () => {
    this.setState({ isShowUserInfo: !this.state.isShowUserInfo })
  }

  render() {
    const {
      userName,
      userAge
    } = this.props;

    return (
      <div>
        {this.state.isShowUserInfo && (
          <p>Name: {userName}, age: {userAge}</p>
        )}
        <button onClick={this.onToggleUserInfo}>Click on me</button>
      </div>
    )
  }
}

export default DomashkaAccordionButton;
