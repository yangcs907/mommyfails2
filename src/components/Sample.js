import React, { Component } from "react";
import example1 from "./images/example1.png";
import example2 from "./images/example2.png";
import example3 from "./images/example3.png";


const sampleSection = {
  textAlign: "center",
  height: "100%",
  width: "100%",
  maxWidth: "100%",
  top: "0"
}

const closeButtonSection = {
  width: "9999px",
  maxWidth: "100%",
  padding: "15px",
  paddingRight: "0px"
}

const closeButton = {
  color: "#ffab40",
  fontWeight: "500",
  borderStyle: "none",
  background: "none",
  cursor: "pointer",
  fontSize: "26px",
  opacity: "0.8",
  float: "right",
}

const sampleColumn = {
  width: "500px",
  maxWidth: "100%",
  margin: "auto"
}
const imgStyle = {
  width: "100%",
  marginTop: "-5px",
  marginBottom: "0px"
}

class Sample extends Component {
  render() {
    return(
      <div className="sampleContainer">
          <div style={closeButtonSection}>
        <button onClick={this.props.hideSample} style={closeButton}><i class="far fa-times-circle"></i></button>
        </div>
        <div style={sampleSection}>
        <img src={example1} alt="example1" style={imgStyle} />
          <img src={example2} alt="example2" style={imgStyle} />
            <img src={example3} alt="example3" style={imgStyle} />
              <div style={closeButtonSection}>
            <button onClick={this.props.hideSample} style={closeButton}><i class="far fa-times-circle"></i></button>
            </div>
      </div>

    </div>
    )
  }
}

export default Sample;
