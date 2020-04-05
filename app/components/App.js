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
    links: [
      {
        linkText: "Click here to view project",
        link: "https://play.google.com/store/apps/details?id=com.emma20191215"
      },
      {
        linkText: "Click here to view mobile app repo",
        link: "https://github.com/LiChoi/emma"
      },
      {
        linkText: "Click here to view server repo",
        link: "https://github.com/LiChoi/emma_server"
      },
    ],
    featured: true
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
    links: [
      {
        linkText: "Click here to view project",
        link: "https://red-eden.glitch.me/"
      },
      {
        linkText: "Click here to view repo",
        link: "https://github.com/LiChoi/rededen"
      }
    ],
    featured: true
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
    links: [
      {
        linkText: "Click here to view project",
        link: "https://codepen.io/LiChoi/full/xvORPL"
      }
    ],
    featured: true
  },
  {
    image_url: "https://cdn.glitch.com/5675e050-6473-484a-ab54-bd50c37e5996%2FJavascriptCalculator.png?v=1584404750767",
    image_alt: "Javascript Calculator",
    title: "Javascript Calculator",
    description: "Adds, substracts, multiplies AND divides!",
    features: [
      'Addition',
      'Subtraction',
      'Multiplication',
      'Division',
      'Batteries not included'
    ],
    techStack: [
      "Programming languages: Javascript, HTML/CSS",
      "Front-end framework: React",
      "Libraries used: SCSS"
    ],
    blurb: "The calculator looks pretty cool, if I do say so myself.",
    links: [
      {
        linkText: "Click here to view project",
        link: "https://codepen.io/LiChoi/full/WVwGdL"
      }
    ],
    featured: false
  },
  {
    image_url: "https://cdn.glitch.com/5675e050-6473-484a-ab54-bd50c37e5996%2FUSMap.png?v=1584405476199",
    image_alt: "US Map",
    title: "Choropleth Map of USA",
    description: "An SVG-generated choropleth map of US educational attainment",
    features: [
      'A choropleth map of US educational attainment by county',
      'Tool tip with more info appears when hovering over each country'
    ],
    techStack: [
      "Programming languages: Javascript, HTML/CSS",
      "Libraries used: d3, d3-geo-projection, d3-scale-chromatic, topojson"
    ],
    blurb: "Used API call to get the topojson data needed to draw the map, then color-coded each county based on another set of data.",
    links: [
      {
        linkText: "Click here to view project",
        link: "https://codepen.io/LiChoi/full/Ymrjgq"
      }
    ],
    featured: false
  },
  {
    image_url: "https://cdn.glitch.com/5675e050-6473-484a-ab54-bd50c37e5996%2FMarkdownPreviewer.png?v=1584406299121",
    image_alt: "Mardown Previewer",
    title: "Markdown Previewer",
    description: "Input markdown in top screen. Output on bottom screen.",
    features: [
      'Input markdown in top screen',
      "See the result in the bottom screen!"
    ],
    techStack: [
      "Programming languages: Javascript, HTML/CSS",
      "Front-end framework: React",
      "Libraries used: marked.js"
    ],
    blurb: "Looks like alien technology.",
    links: [
      {
        linkText: "Click here to view project",
        link: "https://codepen.io/LiChoi/full/XvXbvx"
      }
    ],
    featured: false
  },
  {
    image_url: "https://cdn.glitch.com/5675e050-6473-484a-ab54-bd50c37e5996%2FDrumMachine.png?v=1584406893836",
    image_alt: "Drum machine",
    title: "Drum Machine",
    description: "Press button, make noise",
    features: [
      'Clicking each button will produce a unique drum sound',
      "You can also press the corresponding keys on the keyboard"
    ],
    techStack: [
      "Programming languages: Javascript, HTML/CSS",
      "Front-end framework: React",
      "Libraries used: SCSS"
    ],
    blurb: "Make sick beats with this thing!",
    links: [
      {
        linkText: "Click here to view project",
        link: "https://codepen.io/LiChoi/full/Voeqzz"
      }
    ],
    featured: false
  },
  {
    image_url: "https://cdn.glitch.com/5675e050-6473-484a-ab54-bd50c37e5996%2FHeatMap.png?v=1586103385981",
    image_alt: "Heat Map",
    title: "Heat Map",
    description: "SVG-generated bar graph of average global temperature 1760-Present",
    features: [
      'Months on Y-axis, years since 1760 on X-axis',
      "Color-coded based on difference from the average overall temperature in that time span"
    ],
    techStack: [
      "Programming languages: Javascript, HTML/CSS",
      "Libraries used: d3, d3-scale-chromatic"
    ],
    blurb: "Average Global Temperature 1760-Present",
    links: [
      {
        linkText: "Click here to view project",
        link: "https://codepen.io/LiChoi/full/gVgMqJ"
      }
    ],
    featured: false
  },
  {
    image_url: "https://cdn.glitch.com/5675e050-6473-484a-ab54-bd50c37e5996%2FTreeMap.png?v=1586104400364",
    image_alt: "Tree Map",
    title: "Tree Map",
    description: "SVG-generated tree map showing best-selling video games per platform",
    features: [
      'Tree map: size of blocks correspond to # of sales',
      "Color-coded based on platform",
      "You can mouse over each block to get more info"
    ],
    techStack: [
      "Programming languages: Javascript, HTML/CSS",
      "Libraries used: d3, d3-scale-chromatic"
    ],
    blurb: "SVG-generated tree map showing best-selling video games per platform",
    links: [
      {
        linkText: "Click here to view project",
        link: "https://codepen.io/LiChoi/full/LwzXVM"
      }
    ],
    featured: false
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
    if(this.props.state.modal){
      document.body.style.overflow = "hidden";
      return(
        <div id='canvas'>
          <div id='modal'>
            <h1>{this.props.state.modal.title}</h1>
            <br></br>
            <p>{this.props.state.modal.blurb}</p>
            <br></br>
            <h3>Features</h3>
            <br></br>
            <ul>
              {
                this.props.state.modal.features.map((feature)=>{
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
                this.props.state.modal.techStack.map((tech)=>{
                  return(
                    <li>{tech}</li>
                  );
                })
              }
            </ul>
            <br></br>
            {
              this.props.state.modal.links.map((linkObject, i)=>{
                return(
                  <div>
                    <a id={'project-link' + i} class='project-link' href={linkObject.link} target="_blank">{linkObject.linkText}</a>
                  </div>
                );
              })
            }
            <br></br>
            <br></br>
            <button
              id='close-modal'
              onClick={()=>{ 
                this.props.changeState({modal: false});
                document.body.style.overflow = "scroll";
              }} 
            >
              Close
            </button>
          </div>
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
      modal: false
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(state){
    this.setState(state);
  }

  render() {
    return (
      <div>
        
        <Modal state={this.state} changeState={this.changeState} />
        
        <div id="title">
          <h1 id="name">Liming Choi</h1>
          <h2 id="role">Software Engineer</h2>    
        </div>
        
        <h2 class='headline'>Featured Projects</h2>
        <br></br>
        <Carousel id="carousel" interval={null}>
          {
            CarouselConfig.map((config, i)=>{
              return config.featured ? CarouselItem(config, this.changeState, i, this.state) : null ;  
            })  
          }
        </Carousel>
        <br></br>
        <h2 class='headline'>Other Projects</h2>
        <br></br>
        <Carousel id="other-projects" interval={null}>
          {
            CarouselConfig.map((config, i)=>{
              return config.featured ? null : CarouselItem(config, this.changeState, i, this.state) ;  
            })  
          }
        </Carousel>
        
        <div id="contact">
          <h2 class='headline'>Contact</h2>
          <br></br>
          <a class='contact-links' href="https://codepen.io/LiChoi" target='_blank'>Link to my codepen</a>
          <br></br>
          <a class='contact-links' href="https://github.com/LiChoi" target='_blank'>Link to my github</a>
        </div>
        
      </div>
    );
  }
}

module.exports = Portfolio;
