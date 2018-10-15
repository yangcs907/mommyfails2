import React, { Component } from "react";
import firebase from "../firebase.js";
import privacyNoticeMommyFails from "./images/privacyNoticeMommyFails.pdf";

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
      <div className="terms">
        <strong>Terms and conditions for submitting content to Mommyfails.org</strong>
        <p>Thank you for submitting your content to MommyFails.org. By submitting content you agree to our terms and conditions, which are detailed below.</p>
        <strong>Terms and conditions for submitting content to Mommyfails.org</strong>
        <p>1.1 These terms apply when you submit content relating to your story and contact information to mommyfails.org. Content may include text, images, photographs, videos, movies, plans, drawings, sketches or any other content that you supply to us.</p>
        <p>1.2 By submitting content to us, you agree to these terms and these terms and the license to use the content (set out in paragraph 1.3) will come into existence between you and us.</p>
        <p>1.3 In accordance with paragraph 1.2, you grant to us a non-exclusive, worldwide, irrevocable, perpetual, transferable, sub-licensable, paid up and royalty-free license for us to use, publish, reproduce, display or otherwise exploit the content that you submit to us in whole or in part for any purpose we may determine (including on our websites and any other site in which we have publishing rights; our mobile and tablet applications; our social media pages; in any of our advertising, marketing or promotional works; in publications; to allow third parties to publish the content where they do so in association with us).</p>
        <p>1.4 You acknowledge and agree that we will not pay you a fee for the content that you submit to us. In exchange for you providing the content, the content may be featured on our websites and in publications or may be used, published, reproduced, displayed or otherwise exploited for any other purpose as explained in paragraph 1.3.</p>
        <p>1.5 You acknowledge and agree that we have the right to:</p>
        <p>a) edit, adapt and make changes to any content that you submit to us without your prior approval (for example, to correct any typographical and grammatical errors, to ensure text conforms with our writing style, to shorten a video or movie, or to crop an image);</p>
        <p>b) decide not to use, publish, reproduce, display or otherwise exploit the content that you submit to us; and</p>
        <p>c) remove any content at any time (including from our websites; our mobile and tablet applications; our social media pages; our advertising, marketing or promotional works; publications).</p>
        <p>1.6 You hereby legally promise (warrant) that:</p>
        <p>a) the content does not infringe any rights of any third parties (including, but not limited to, copyright and trademarks) and does not otherwise violate the law;</p>
        <p>b) you are entitled to, and have full power and authority to, license all existing and future intellectual property rights in the content;</p>
        <p>(c) you have informed us (where applicable) of any credits that need to be used in conjunction with the content;</p>
        <p>(d) the content is not abusive, obscene, illegal, defamatory, libellous, factually inaccurate, unlawfully threatening, unlawfully harassing, pornographic, racist, or liable to incite racial hatred or acts of terrorism; and</p>
        <p>(e) the content does not contain any viruses, Trojan horses, worms, time bombs, keystroke loggers, spyware, adware, cancel bots or other computer programming routines that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or personal information or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware.</p>
        <p>1.7 You agree to immediately notify us in writing by email to info@mommyfails.org giving full details if a third party threatens to make, or makes, a claim that the content infringes its rights or makes any other claim relating to the rights granted by the license in paragraph 1.3. You agree to provide us with all assistance that we may reasonably require with regards to any such claim that is made or threatened.</p>
        <p>1.8 You agree to indemnify us against all liabilities, costs, claims, damages, losses and expenses arising as a result of a breach by you of any of the warranties in paragraph 1.6 (including but not limited to any claim or action against us that the content infringes any rights of any third parties) and as a result of you not notifying us in writing in accordance with paragraph 1.7.</p>
        <p>1.9 We will collect and process information and personal data relating to you in accordance with our privacy notice which can be accessed at <a href={privacyNoticeMommyFails} target="_blank">privacy notice</a></p>
        <p>1.10 We amend these terms from time to time. Once the terms come into existence between you and us (in accordance with paragraph 1.2), every time you wish to submit content to us, please check these terms to ensure you understand the terms that apply at that time. These terms were most recently updated on October 15th 2018.</p>
        <p>1.11 You agree to promptly execute and deliver (or use all reasonable endeavours to procure that any necessary third party shall promptly execute and deliver) such documents and perform such acts as may reasonably be required for the purpose of giving full effect to these terms.</p>
        <p>1.12 If any provision or part-provision of these terms is or becomes invalid, illegal or unenforceable, it will be deemed modified to the minimum extent necessary to make it valid, legal and enforceable. If such modification is not possible, the relevant provision or part-provision will be deemed deleted. Any modification to or deletion of a provision or part-provision under this paragraph will not affect the validity and enforceability of the rest of these terms.</p>
        <p></p>
      </div>
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
                          </p>
                          <p>
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
                    <p>What are two-three lessons from your story that can help encourage other moms?</p>
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
