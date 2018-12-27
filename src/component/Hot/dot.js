import React, { Component } from "react";
import "./index.css";
class Dot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { picX, picY, dotColor } = this.props.value;
    const { onClick } = this.props;
    return (
      <div
        className="dot"
        style={{
          left: picX === undefined ? null : picX - 25 + "px",
          top: picY === undefined ? null : picY - 25 + "px"
        }}
      >
        <div
          onClick={onClick.bind(this, this.props.value)}
          className="item1"
          style={{
            backgroundColor: dotColor === undefined ? 'green' : dotColor
          }}
        />
        <div
          className="item2"
          style={{ backgroundColor: dotColor === undefined ? 'green' : dotColor }}
        />
      </div>
    );
  }
  componentDidMount() {}
}

export default Dot;
