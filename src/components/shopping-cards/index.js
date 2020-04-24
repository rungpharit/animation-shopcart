import React, { Component } from 'react';

class ShoppingCards extends Component {
  constructor(){
    super()
    this.state = {
      goods:[
        {
          id:0,
          title:'Glass',
          price: 200
        },
        {
          id:1,
          title:'Book',
          price: 100
        },
        {
          id:2,
          title:'shoes',
          price: 1000
        },
      ]
    }
  }

  render(){

    return(
      <div >
        Hello from shopping cards
      </div>
        
    )
  }
}

export default ShoppingCards;