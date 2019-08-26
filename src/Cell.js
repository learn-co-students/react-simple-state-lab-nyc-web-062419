import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super(props)
        this.state = { color: this.props.value }
    }

    changeColor = () => {
        this.setState({
            color: `#333`
        })
    }

    render() {
        return (
            <div className="cell" onClick={this.changeColor} style={{ backgroundColor: this.state.color }}>

            </div>
        )
    }
}


// Create a new component in src/ called Cell. The Cell component will give us our first chance to use state. We want each Cell to keep track of a single state value: color, (which will be a 3 digit hex value i.e. '#FFF').

// Define a constructor method in Cell, which sets an initial state key of color to the value prop which is passed from its parent component. Remember to call super() on the first line of the constructor (this is required in React components if we are to use this in the constructor). Additionally, for props to be accessible within the constructor, we need to pass props to both the constructor as well as super. Ultimately, our constructor should look something like this:
// constructor(props) {
//   super(props)
//   // ...define initial state with a key of 'color' set to the 'value' prop
// }
// Cell should render a single <div> with a className of cell
// In render, the cell should set the background color in-line for the <div> by adding the following attribute: style={{backgroundColor: '#FFF'}} ('#FFF' is just used as an example value here - the value should be state's color)
// Create a click listener which, when activated, updates the state to the following hex value: '#333'

