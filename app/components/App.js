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
    description: "A story about a little girl who escapes into another realm to save her home."
  },
  {
    image_url: "https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FMars.jpg?v=1566083149958",
    image_alt: "Mars",
    title: "Mars",
    description: "The red planet"
  },
  {
    image_url: "https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FGabriella%20Colour.jpg?v=1567393885892",
    image_alt: "Gabriella Romero",
    title: "Gabriella Romero",
    description: "The Mother of Lies"
  },
]

const CarouselItem = (config, changeState, index) => {
  return(
    <Carousel.Item className="carousel-item" id={`item${index}`}>  
      <img
        className="d-block w-100 carousel-image"
        src={config.image_url}
        alt={config.image_alt}
        onClick={() => { changeState({modal: true}) }}
      />
      <Carousel.Caption>
        <h3>{config.title}</h3>
        <p>{config.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

const Modal = (modal, changeState) => {
  if(modal){
    return(
      <div id='modal'>
        I am the modal
        <button onClick={()=>{ changeState({modal: false}) }}>
          Close the modal
        </button>
      </div>
    );
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
        
        <div id="title">
          <h1>Billy Bob</h1>
          <h2>Software Engineer</h2>    
        </div>
        
        {Modal(this.state.modal, this.changeState)}
        
        <Carousel id="carousel" interval={null}>
          {
            CarouselConfig.map((config, i)=>{
              return CarouselItem(config, this.changeState, i);            
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
