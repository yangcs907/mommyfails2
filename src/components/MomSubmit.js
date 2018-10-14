import React, { Component } from "react";
import firebase from "../firebase.js";

const storyInput = {
  maxHeight: "500px"
};

const lessonStyle = {
  fontSize: "16px",
  fontWeight: "bolder"
};

class MomSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: new Date(),
      location: "",
      email: "",
      occupation: "",
      bio: "",
      childAge: "",
      storyTitle: "",
      story: "",
      lessons: "",
      waiver: false,
      terms: false,
      submitted: false
    };
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleStorySubmit = event => {
    event.preventDefault();
    this.setState({submitted: true});
    console.log(`submission for: ${this.state.name} from ${this.state.location}`);
    const storyRef = firebase.database().ref('storySubmissions');
    const story = {
      date: new Date(),
      name: this.state.name,
      location: this.state.location,
      email: this.state.email,
      occupation: this.state.occupation,
      bio: this.state.bio,
      childAge: this.state.childAge,
      storyTitle: this.state.storyTitle,
      story: this.state.story,
      lessons: this.state.lessons,
    }
    storyRef.push(story);
  };
  //function for testing purposes
  getState = () => {
    alert(`${this.state.name} ${this.state.location} ${this.state.email} ${this.state.occupation} ${this.state.bio} ${this.state.childAge} ${this.state.storyTitle} ${this.state.story} ${this.state.lessons} ${this.state.waiver}`);
    this.setState({
      name: "",
      location: "",
      email: "",
      occupation: "",
      bio: "",
      childAge: "",
      storyTitle: "",
      story: "",
      lessons: ""
    });
  };

  setWaiver = () => {
    if (this.state.waiver) {
      this.setState({
        waiver: false
      });
    }
    else {
      this.setState({
        waiver: true
      });
    }
  };

  showTerms = () => {
    if (this.state.terms) {
      this.setState({
        terms: false
      });
    }
    else {
      this.setState({
        terms: true
      });
    }
  };

  render() {
    const waiver = this.state.waiver;
    const name = this.state.name;
    const location = this.state.location;
    const email = this.state.email;
    const occupation = this.state.occupation;
    const bio = this.state.bio;
    const childAge = this.state.childAge;
    const story = this.state.story;
    const lessons = this.state.lessons;
    let submit

    if (waiver && name && location && email && occupation && bio && childAge && story && lessons) {
      submit = <a onClick={this.handleStorySubmit} className="submit">Submit</a>
    } else {
      submit = <a className="noSubmit">Submit</a>
    }

    const clickedTerms = this.state.terms;
    let terms

    if (clickedTerms) {
      terms =
      <textarea className="terms">
        Terms & agreements are currently under construction, thank you!
      </textarea>
    } else {
      terms = ""
    }
    if (!this.state.submitted) {


      return (
        <div className="formContainer">
          <div className="formTitle">
            <p>Submit Your Story Here</p>
          </div>
          <div className="sampleButton">
            <button onClick={this.props.showSample} id="sampleButton">Click here for a sample</button>
          </div>
          <div className="formSection">
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="validate"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      />
                    <label for="name"><i class="fas fa-female"></i> Name</label>
                  </div>
                  <div class="input-field col s6">
                    <input
                      name="location"
                      id="location"
                      type="text"
                      class="validate"
                      value={this.state.location}
                      onChange={this.handleInputChange}
                      />
                    <label for="location"><i class="far fa-compass"></i> Location</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s6">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="validate"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      />
                    <label for="email"><i class="far fa-envelope"></i> Email</label>
                  </div>
                  <div class="input-field col s6">
                    <input
                      name="occupation"
                      id="occupation"
                      type="text"
                      class="validate"
                      value={this.state.occupation}
                      onChange={this.handleInputChange}
                      />
                    <label for="occupation">Occupation</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12 m6">
                    <textarea
                      name="bio"
                      id="bio"
                      type="text"
                      class="materialize-textarea"
                      value={this.state.bio}
                      onChange={this.handleInputChange}
                      />
                    <label for="bio">Brief Bio</label>
                  </div>
                  <div class="input-field col s12 m6">
                    <p className="radioHeader">How old was your child in this story?</p>
                    <form action="#">
                      <div className="radioGroup">
                        <div className="radioChoice1">
                          <p>
                            <label>
                              <input
                                name="childAge"
                                type="radio"
                                value="infant"
                                onChange={this.handleInputChange}
                                />
                              <span>
                                Infant
                                <br></br>
                                (0 - 18 mos)
                              </span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input
                                name="childAge"
                                type="radio"
                                value="Toddler"
                                onChange={this.handleInputChange}
                                />
                              <span>
                                Toddler
                                <br></br>
                                (18 mos - 3 yrs)
                              </span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input
                                name="childAge"
                                type="radio"
                                value="Preschool"
                                onChange={this.handleInputChange}
                                />
                              <span>
                                Preschool
                                <br></br>
                                (3 - 6 yrs)
                              </span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input
                                name="childAge"
                                type="radio"
                                value="School Age"
                                onChange={this.handleInputChange}
                                />
                              <span>
                                School Age
                                <br></br>
                                (6 - 9 yrs)
                              </span>
                            </label>
                          </p>
                        </div>
                        <div className="radioChoice2">
                          <p>
                            <label>
                              <input
                                name="childAge"
                                type="radio"
                                value="Tweens"
                                onChange={this.handleInputChange}
                                />
                              <span>
                                Tweens
                                <br></br>
                                (9 - 12 yrs)
                              </span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input
                                name="childAge"
                                type="radio"
                                value="Teenager"
                                onChange={this.handleInputChange}
                                />
                              <span>
                                Teenager
                                <br></br>
                                (13 - 18 yrs)
                              </span>
                            </label>
                          </p>
                          <p>
                            <label>
                              <input
                                name="childAge"
                                type="radio"
                                value="Adult"
                                onChange={this.handleInputChange}
                                />
                              <span>
                                Adult
                                <br></br>
                                (18 + yrs)
                              </span>
                            </label>
                            <label>
                              <input
                                name="childAge"
                                type="radio"
                                value="No Child"
                                onChange={this.handleInputChange}
                                />
                              <span>
                                Story does not involve my child, just myself
                              </span>
                            </label>
                          </p>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea
                      name="storyTitle"
                      id="storyTitle"
                      type="text"
                      class="materialize-textarea"
                      value={this.state.storyTitle}
                      onChange={this.handleInputChange}
                      />
                    <label for="storyTitle"><i className="fas fa-book-open"></i>&nbsp;&nbsp;Story Title (optional)</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea
                      name="story"
                      id="story"
                      type="text"
                      class="materialize-textarea"
                      value={this.state.story}
                      onChange={this.handleInputChange}
                      />
                    <label for="story"><i className="fas fa-book-open"></i>&nbsp;&nbsp;Your Story (approx. 500 words)</label>
                  </div>
                </div>
                <div class = "row">
                  <div className="lessonHeader">
                    <p>What are three takeways or lessons from your story that can help encourage other mothers?</p>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <textarea
                      name="lessons"
                      id="lessons"
                      type="text"
                      class="materialize-textarea"
                      value={this.state.lessons}
                      onChange={this.handleInputChange}
                      />
                    <label style={lessonStyle} for="lessons">Takeways / Lessons</label>
                  </div>
                </div>
                <div class="row">
                  <div class="col s12">
                    <form action="#">
                      <span>I have read and agree to the <a onClick={this.showTerms} className="termsLink">terms and conditions</a></span>
                      {terms}
                      <p>
                        <label>
                          <input
                            type="checkbox"
                            name="waiver"
                            value= "Agree"
                            onChange={this.setWaiver}
                            />
                          <span></span>
                        </label>
                      </p>
                    </form>
                  </div>
                </div>
                {submit}
              </form>
            </div>
          </div>
        </div>
      );
    }
    else {
      return(
        <div className="thanksContent">
          <div className="introBody">
            <div className="thankYou">
              <p>{this.state.name}, thank you for your submission!
                You are helping moms around the world
              </p>
              <a href="/">Click to submit another story</a>
            </div>
          </div>
        </div>
      )
    };
  }

}


export default MomSubmit;
