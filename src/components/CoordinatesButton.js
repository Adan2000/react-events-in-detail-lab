// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClick = event => {
        this.props.onRecieveCoordinates([event.clientX, event.clientY])
    }
    //this function uses that props that was passed in by index.js
    //that function only has one job, print out whatever is passed
    //so we pass in the event X and Y cordinates. as an Array [] ex. [3,5] first being the x and second being the y


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Coords</button>
            </div>
        )
    }
    //we add in a button with a event listener that then 
    //triggers a function called handle click
}

export default CoordinatesButton;