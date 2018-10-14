import React, { Component } from "react";

const sampleContainer = {
  textAlign: "center",
  position: "fixed",
  height: "100%",
  top: "0",
  width: "9999px",
  maxWidth: "100%",
  backgroundColor: "rgba(255,255,255,0.6)"
}

const sampleSection = {
  textAlign: "center",
  height: "100%"
}

const closeButtonSection = {
  width: "9999px",
  maxWidth: "100%",
  padding: "15px"
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

class Sample extends Component {
  render() {
    return(
      <div style={sampleContainer}>
          <div style={closeButtonSection}>
        <button onClick={this.props.hideSample} style={closeButton}><i class="far fa-times-circle"></i></button>
        </div>
        <div style={sampleSection}>
        <h1>Hello There</h1>
        <p>The sample form is still under construction, thank you!</p>
        <br></br>
        <p>Image of a sample form will appear here</p>
        </div>
      </div>
    )
  }
}

export default Sample;
