import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Black Pink</h1>
        <div className="container">
        <h2 className="section-title">Seniors</h2>
        <ul className="cards">
          <li className="cards-item third">
            <div className="card">
              <div className="card-content">
                <div className="card-image"></div>
                <div className="card-container">
                  <div className="card-title">Name M. Surname</div>
                  <p className="card-text">"Senior quote"</p>
                  <p className="card-text">Activities</p>
                </div>
                </div>
                </div>
                </li>
                </ul>
      
    );
  }
}

export default App;
