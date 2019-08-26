import React, { Component } from 'react';
import { pattern1 } from './data.js'
import Cell from "./Cell"

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(value => <Cell value={value}/>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}

      </div>
    )
  }

}

 Matrix.defaultProps = {
   values: Array(10).fill(Array(10).fill("#F00"))
 }