// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  handleClick = event => {
      setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };
  //event pooling


  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
  //here we have a button with a inClick event that 
  //will ttrigger HandleClick when clicked, passing in an event
   
}

export default DelayedButton;