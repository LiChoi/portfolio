const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const Switch = require('react-router-dom').Switch;
const Route = require('react-router-dom').Route; 
const Link = require('react-router-dom').Link;
const Carousel = require('react-bootstrap').Carousel;

const Modal = (modal, changeState) => {
  if(modal){
    return(
      <div id='modal'>
        I am the modal
        <button onClick={()=>{changeState({modal: false}); console.log("close the modal") }}>
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
      modal: true
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
        <div id="carousel-div">
          <Carousel>
            <Carousel.Item>
              <button onClick={() => {this.setState({modal: this.state.modal == true ? false : true}); console.log("clicked")}}>
                <img
                  className="d-block w-100"
                  src="https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FMars.jpg?v=1566083149958"
                  alt="First slide"
                />
              </button>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <button onClick={()=>{this.setState({modal: this.state.modal == true ? false : true}); console.log("clicked")}}>
                <img
                  className="d-block w-100"
                  src="https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FMars.jpg?v=1566083149958"
                  alt="Third slide"
                />
              </button>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <button onClick={()=>{this.setState({modal: this.state.modal == true ? false : true}); console.log("clicked")}}>
                <img
                  className="d-block w-100"
                  src="https://cdn.glitch.com/3f1b8d60-72dd-4749-b52a-b1d788645b26%2FMars.jpg?v=1566083149958"
                  alt="Third slide"
                />
              </button>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div id="contact">
        
        </div>
      </div>
    );
  }
}

module.exports = Portfolio;
