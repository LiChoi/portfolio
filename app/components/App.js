const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const Switch = require('react-router-dom').Switch;
const Route = require('react-router-dom').Route; 
const Link = require('react-router-dom').Link;
const Carousel = require('react-bootstrap').Carousel;

const CarouselConfig = [
  {
    image_url: "https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FFairy%20Tale%20Land.jpg?v=1567369572073",
    image_alt: "Saving Ever After",
    title: "Saving Ever After",
    description: "A story about a little girl who escapes into another realm to save her home.",
    features: ['c', 'c', 'c', 'c', 'c', 'c', 'c', 'c'],
    techStack: [3, 3, 3],
    blurb: "A paragraph."
  },
  {
    image_url: "https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FMars.jpg?v=1566083149958",
    image_alt: "Mars",
    title: "Mars",
    description: "The red planet",
    features: ['a', 'a', 'a'],
    techStack: [1, 1, 1],
    blurb: "A paragraph."
  },
  {
    image_url: "https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FGabriella%20Colour.jpg?v=1567393885892",
    image_alt: "Gabriella Romero",
    title: "Gabriella Romero",
    description: "The Mother of Lies",
    features: ['b', 'b', 'b'],
    techStack: [2, 2, 2],
    blurb: "A paragraph."
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
        <h3>{config.title}</h3>
        <p>{config.description}</p>
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
