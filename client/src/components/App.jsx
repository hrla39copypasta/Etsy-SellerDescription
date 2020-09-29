import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="hi">
        <h1>hi</h1>
        <h2>hello</h2>
        <button className="test" type="submit">PUSH ME</button>
      </div>
    );
  }
}
