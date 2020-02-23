import React, { Component } from "react";
import "./App.css";
import puppy from "./puppy2.jpeg";
import happyPup from "./download.jpeg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class="tooltip">
            what is this?
            <span class="tooltiptext">
              Generate and Draw Dogs! start by naming the dog below
            </span>
          </div>
          <form>
            <label>
              Name Your Dog:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="dog name"/>
          </form>
          <img src={puppy} className="doggo" alt="puppy" />
          <p>Here's your puppy!</p>
          <button onClick="window.location.href = 'https://w3docs.com';"> Get another Puppy here </button>
          <input type="image" src={happyPup} onClick="location.href='https://www.randomdoggiegenerator.com/';" value="More Dogs"/>
          <p>"Press me for more too!"</p>
        </header>
      </div>
    );
  }
}

function displayPuppy() {
  return (
    <div>
      <a className="puppy-Link" href="https://dog.ceo/api/breeds/image/random">
        {" "}
        Here's your puppy
      </a>
    </div>
  );
}

export default App;
