import React, { Component } from 'react';
import './Slideshow.css';
import Card from './Card';
import data from './data'


// class component
class Slideshow extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[5]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {properties, property} = this.state;
    return (
      <div className="slideshow">
        <div className='slide-btns'>
          <button className='slide-btn2'
            onClick={() => this.prevProperty()} 
            disabled={property.index === 0}
          >◄</button> 
          <button className='slide-btn1'
            onClick={() => this.nextProperty()} 
            disabled={property.index === data.properties.length-1}
          >►</button>      
          <br/>
          <br/>
        </div>

        <div className="page">
          <br/>          

            <div className="col">
              <div className={`cards-slider active-slide-${property.index}`}>
                <div className="cards-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                }}>
                  {
                    properties.map(property => 
                    <Card key={property._id} property={property} />)
                  }
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Slideshow;