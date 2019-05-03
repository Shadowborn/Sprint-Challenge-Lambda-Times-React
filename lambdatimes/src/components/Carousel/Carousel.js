import React, { Component } from 'react';
import { carouselData } from '../../data'
import Slides from './Slides';
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      slide: []
    }
  }
  componentDidMount(){
    this.setState({slide: carouselData})
    console.log("Carousel state", this.state)
  }

  // leftClick = () => {
    
  // }

  // rightClick = () => {

  // }

  selectedImage = () => {
    return <img src={this.slide}/>
  }
  
  render(){
    return (
      <div className="carousel">
      <Slides 
          slides={this.state.slides} 
      />
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}