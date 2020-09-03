import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <img src="./newwelcome-page/images/logo.png" width="150" alt="logo" />
            <div>
              <ul>
                
                <li>SIGNUP</li>
                <li>LOGIN</li>
              </ul>
            </div>
          </header>
        </section>

        <section id="main">
          <div className="main-text">
            <span>GRAB YOUR PEN..</span> <br /> AND NOTE IT DOWN <br />
            "IF YOU AREN'T TAKING NOTE'S ,THEN YOU AREN'T LEARNING"
          </div>
          <img src="./newwelcome-page/note.png" width="250" alt="logo"  />
        </section>
      </div>
    );
  }
}

export default App;
