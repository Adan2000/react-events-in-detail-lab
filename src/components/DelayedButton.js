// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  handleClick = event => {
      setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
  //this function takes in that event
  //passes in that event to onDelayedClick
  //this is also inside a setTimeout that is set to this.props.delay

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
  //we created a button that has a click event listener,
  //when clicked it will pass that event to a function 
   
}

export default DelayedButton;