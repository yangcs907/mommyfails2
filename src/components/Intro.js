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

    return (
      <div className="mainContent">
        <div className={sampleClass}>
          <div className="introBody">
            <div className="content">
              <h4><i className="fas fa-book-open"></i>&nbsp;Our Story</h4>
              <p>
                Mommy Fails is a movement that uses mommy fail stories and humor to bring about hope and healing to moms everywhere. By sharing mommy fail stories that are common to all moms, we want to empower and encourage all moms to find the courage to live out the high calling of motherhood.
              </p>
              <div className="contentVideo">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/8-Qbrn8CQRA"
                  frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
            </div>

          </div>
          <div className="introBody">
            <div className="content" id="contentYourStory">
              <h4><i className="fas fa-star"></i>&nbsp;Your Story</h4>
              <p>
                Moms all have a fail story. It’s a requirement to be part of this group. But for so long, these stories have been a force of division and isolation. It has caused moms to be critical and judgmental of each other as they deal with their own feelings of isolation, insecurities, guilt, depression, and a whole laundry list of other unhealthy emotions. And seriously, who needs more laundry? Now is the time to break this cycle. These mommy fail stories that once broke and divided, can now unite!
              </p>
              <p>
                At MommyFails, our motto is “Real change happens when my story and your story becomes OUR STORY.” Let’s support one another by submitting our mommy fail story, so that these stories of failure can be transformed into stories of beauty and encouragement.              </p>
            </div>
          </div>
          <div className="yourStoryContent">
            <div className="row">
              <div className="col s12 m4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Kq5AZ5WdHkg"
                  frameBorder="0" allow="autoplay; encrypted-media; theater" allowFullScreen></iframe>
              </div>
              <div className="col s12 m4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/n2st5gEjmBc"
                  frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              </div>
              <div className="col s12 m4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3TlMv8RgnLc"
                  frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
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
