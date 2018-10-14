import React, { Component } from "react";
import MomSubmit from "./MomSubmit";
import Sample from "./Sample";
import "../index.css";

const introWords = {
  borderRadius: "10px",
  fontFamily: "Tajawal, 'sans-serif'",
  fontSize: "20px",
};

const introBody = {
  marginTop: "150px",
  width: "50%",
  float: "left",
  marginLeft: "500px",
  borderRadius: "10px",
  textAlign: "center"
};


const buttonAlign = {
  color: "#ffab40",
  marginRight: "24px",
  WebkitTransition: "color .3s ease",
  transition: "color .3s ease",
  textTransform: "uppercase",
  borderStyle: "none"
};

class Intro extends Component {
  state = {
    sample: false
  };

  showSample = () => {
    this.setState({sample: true});
  };

  hideSample = () => {
    this.setState({sample: false});
  };

  render() {
    const sampleState = this.state.sample;
    let sampleDiv
    if (sampleState) {
      sampleDiv =
      <Sample
        hideSample={this.hideSample}
        />
    } else {
      sampleDiv = ""
    }

    const currentSampleState = this.state.sample;
    let sampleClass
    if (currentSampleState) {
      sampleClass = "sampleOn"
    } else {
      sampleClass = "sampleOff"
    }

    return(
      <div className="mainContent">
        <div className={sampleClass}>
          <div className="introBody">
            <div className="content">
              <h4><i className="fas fa-book-open"></i>&nbsp;Our Story</h4>
              <p>Mommy Fails is a way that moms from around the world can connect through personal
                stories about the hardships and difficulties of being a mother.
              </p>
              <div className="contentVideo">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Cyy24KKjP2Q"
                  frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </div>

          </div>
          <div className="introBody">
            <div className="content">
              <h4><i className="fas fa-star"></i>&nbsp;Your Story</h4>
              <p>
                (This section is currently still under construction, please check back shortly, thank you!)
                <br></br><br></br>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className="contentVideo" id="yourStoryContent">
                <div className="row">
                  <div className="col s12 m4">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/l9IQNCj0U9k"
                      frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>
                  <div className="col s12 m4">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mlXuZwtrh_o"
                      frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>
                  <div className="col s12 m4">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/u42O6t1U7ng"
                      frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MomSubmit showSample={this.showSample} />
        </div>
        {sampleDiv}
        <div className="contact">
          <div className="row">
            <div className="col s12 m6">
          <h6><i className="far fa-envelope"></i>&nbsp;&nbsp;Contact Us</h6><a href="mailto:info@mommyfails.org">info@mommyfails.org</a>
          </div>
        </div>
      </div>
      </div>
    );
  }

}


export default Intro;
