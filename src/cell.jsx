import React, { Component } from "react";

class Cell extends Component {
  state = {
    color: ""
  };
  constructor(props) {
    super(props);
    this.state.color = this.props.value;
  }

  handleClick(e) {
    console.log(this);
    this.setState({ color: "#333" });
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick.bind(this)}
        className="cell"
      ></div>
    );
  }
}

export default Cell;

// {this.genRow(rowVals)}
