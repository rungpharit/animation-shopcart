import React, { Component } from 'react';
import styles from './shopping-cards.module.css';
import Card from './card'

class ShoppingCards extends Component {
  constructor(){
    super()
    this.state = {
      products:[
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

    let card = this.state.products.map((product,index) => <Card key={index} id={product.id} title={product.title} price={product.price} />)

    return(
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.cards}>
            {card}
          </div>
        </div>
    </div>
    )
  }
}

export default ShoppingCards;