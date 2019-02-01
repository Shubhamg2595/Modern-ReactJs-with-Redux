import React, { Component } from 'react';

import './App.css';

class App extends Component {


  render() {

    //refrencing js variables in our jsx Block
    let buttonText = 'Click me';
    let buttonStyle = {
      backgroundColor: 'blue',
      color: 'white'
    }
    return (
      <div >
        <label className="label" htmlFor="name">
          {/*reason we use className instead of class keyword
        is to make sure Js compiler in browser
      dont get confused with class components and styles classes
    defined for html elements
  */}
          Enter name:
        </label>
        <input id="name" type='text' />
        <button style={buttonStyle}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
