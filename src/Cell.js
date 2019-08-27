import React, { Component } from "react"

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      color: this.props.value
    }
  }

  handleClick = () => {
    this.setState({
      color: "#333"
    })
  }

  render() {
    // console.log(this.props)
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    )
  }
}
