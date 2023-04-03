import React, { Component } from "react";

class DomashkaToggleButton extends Component {
  constructor() {
    super();
    this.state = {
      isShowUserInfo: false
    }
  }

  onToggleUserInfo = () => {
    this.setState({ isShowUserInfo: !this.state.isShowUserInfo })
  }

  getButtonText = () => this.state.isShowUserInfo ? 'Скрыть': 'Показать'

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
        <button onClick={this.onToggleUserInfo}>{this.getButtonText()}</button>
      </div>
    )
  }
}

export default DomashkaToggleButton;
