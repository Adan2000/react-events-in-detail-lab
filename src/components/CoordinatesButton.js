// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClick = event => {
        this.props.onRecieveCoordinates([event.clientX, event.clientY])
    }
    //we call on that function passed in by the parent
    //we use client X to get the x cordinate wherever it is clicked
    //we use the clientY to get the y cordinate wherever the click is done
    //this will log x and y cordinate


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Coords</button>
            </div>
        )
    }
    //here we render a button, onClick it
    //when clicked it will pass an event to HandleClick 
}

export default CoordinatesButton;