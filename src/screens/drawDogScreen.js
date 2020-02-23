import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";

class Draw extends Component {
  constructor(props) {
    super(props);
    this.state = {
		oneOf: false,
		friendly: false
	};
  }
  render() {
    return (
      <div align="center">
        <div>
          <p>Draw a pup!</p>
          <CanvasDraw />
          <p>Rate your masterpiece below</p>
        </div>

        <form>
          <label>
            One of a Kind:
            <input
              name="oneOf"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Friendly Fido:
            <input
              name="friendly"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export { Draw };
