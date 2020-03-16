const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const Switch = require('react-router-dom').Switch;
const Route = require('react-router-dom').Route; 
const Link = require('react-router-dom').Link;
const Carousel = require('react-bootstrap').Carousel;

const CarouselConfig = [
  {
    image_url: "https://cdn.glitch.com/5675e050-6473-484a-ab54-bd50c37e5996%2FEmma.png?v=1584397588703",
    image_alt: "Emma App",
    title: "EMMA",
    description: "Electronic Medical Mobile Assistant",
    features: [
      'Keep a list of your medications, including details such as dose, directions, and a picture of what it looks like',
      'Check for drug interactions',
      'Check for drug allergies',
      'Check for contraindications (i.e. medical conditions that would make it unsafe to take the medication)',
      'Email your medical provider when Emma has questions about your medication therapy',
      'One click to keep Emma up-to-date with latest clinical information'
    ],
    techStack: [
      "Programming languages: Javascript, HTML/CSS",
      "Front-end framework: React-native",
      "Back-end framework: Express.js",
      "Libraries used: react-native-camera, react-native-fs (to access cached data on phone), react-native-mail, realm (to handle persistent storage on phone)"
    ],
    blurb: "A useful app for anyone who takes multiple chronic medications.",
    link: "https://play.google.com/store/apps/details?id=com.emma20191215"
  },
  {
    image_url: "https://cdn.glitch.com/5675e050-6473-484a-ab54-bd50c37e5996%2FRedEdenWebsiteScreenShot3.png?v=1584401426610",
    image_alt: "Red Eden Website Screenshot",
    title: "Red Eden",
    description: "Author's website",
    features: [
      'Author can sign-in as admin user to add blog posts, manage other users, and clean up the forum',
      'Site visitors can sign-up for an account to be able to post messages on the forum',
      "Site visitors can provide their emails to receive a free copy of a novella. Author can use this to build up an email-list",
      "A place to showcase author's latest projects",
      "A place to add codex entries to build upon the lore",
      "Links to author's other projects, social media and Amazon page"
    ],
    techStack: [
      "Programming languages: Javascript, HTML/CSS",
      "Front-end framework: React, react-router",
      "Back-end framework: Express.js, MongoDB",
      "Libraries used: body-parser, cors, nodemailer (to handle emailer), passport (to handle login credentials), passport-local, express-session, bcrypt (to encrypt saved data)"
    ],
    blurb: "My first full-stack project",
    link: "https://red-eden.glitch.me/"
  },
  {
    image_url: "https://cdn.glitch.com/5675e050-6473-484a-ab54-bd50c37e5996%2FPomodoroClock.png?v=1584402206020",
    image_alt: "Pomodoro Clock",
    title: "Pomodoro Clock",
    description: "A useful tool for time management",
    features: [
      'Set a session time',
      'Set a break time',
      'You can start, pause and reset',
      'Very cool UI!'
    ],
    techStack: [
      "Programming languages: Javascript, HTML/CSS",
      "Front-end framework: React"
    ],
    blurb: "A fun project to build!",
    link: "https://codepen.io/LiChoi/full/xvORPL"
  },
  {
    image_url: "https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FFairy%20Tale%20Land.jpg?v=1567369572073",
    image_alt: "Saving Ever After",
    title: "Saving Ever After",
    description: "A story about a little girl who escapes into another realm to save her home.",
    features: ['c12345 34234 45223 43 432 432 432 4324 324 234 234 324 23 423 4234 23423432 43242342342343  4324 32 fg sg sg sdfg fsd gfs gsdf gs s gs gs', 'c', 'c', 'c', 'c', 'c', 'c', 'c'],
    techStack: [3, 3, 3],
    blurb: "A paragraph.",
    link: "https://www.wikipedia.org"
  },
  {
    image_url: "https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FMars.jpg?v=1566083149958",
    image_alt: "Mars",
    title: "Mars",
    description: "The red planet",
    features: ['a', 'a', 'a'],
    techStack: [1, 1, 1],
    blurb: "A paragraph.",
    link: "https://www.wikipedia.org"
  },
  {
    image_url: "https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FGabriella%20Colour.jpg?v=1567393885892",
    image_alt: "Gabriella Romero",
    title: "Gabriella Romero",
    description: "The Mother of Lies",
    features: ['b', 'b', 'b'],
    techStack: [2, 2, 2],
    blurb: "A paragraph.",
    link: "https://www.wikipedia.org"
  },
]

//Not sure why, but if declare CarouselItem as a class that extends React.component, it would cause the carousel items to have zero dimensions (the elements would still be present with correct text)
const CarouselItem = (config, changeState, index, state) => {
  return(
    <Carousel.Item id={`item${index}`}>  
      <img
        className="d-block w-100 carousel-image"
        src={config.image_url}
        alt={config.image_alt}
        onClick={() => { changeState({modal: config}) }}
      />
      <Carousel.Caption>
        <Modal state={state} changeState={changeState} config={config} />
        <div id='caption'>
          <h3>{config.title}</h3>
          <p>{config.description}</p>
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

class Modal extends React.Component {  
  render(){
    if(this.props.state.modal == this.props.config){
      console.log(this.props.config);
      return(
        <div id='modal'>
          <h1>{this.props.config.title}</h1>
          <br></br>
          <h3>Features</h3>
          <br></br>
          <ul>
            {
              this.props.config.features.map((feature)=>{
                return(
                  <li>{feature}</li>
                );
              })
            }
          </ul>
          <br></br>
          <h3>Tech Stack</h3>
          <br></br>
          <ul>
            {
              this.props.config.techStack.map((tech)=>{
                return(
                  <li>{tech}</li>
                );
              })
            }
          </ul>
          <br></br>
          <a id='project-link' href={this.props.config.link} target="_blank">Click Here to View Project</a>
          <br></br>
          <br></br>
          <p>{this.props.config.blurb}</p>
          <br></br>
          <button
            id='close-modal'
            onClick={()=>{ this.props.changeState({modal: false}) }} 
          >
            Close
          </button>
        </div>
      );  
    } else {
      return null;
    }
  }
} 

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      modal: false,
      modalConfig: null
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(state){
    this.setState(state);
  }

  render() {
    return (
      <div>
        
        <div id="title">
          <h1 id="name">Billy Bob</h1>
          <h2 id="role">Software Engineer</h2>    
        </div>
        
        <Carousel id="carousel" interval={null}>
          {
            CarouselConfig.map((config, i)=>{
              return CarouselItem(config, this.changeState, i, this.state);  
            })  
          }
        </Carousel>
        
        <div id="contact">
        
        </div>
        
      </div>
    );
  }
}

module.exports = Portfolio;
