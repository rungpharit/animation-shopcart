import React, { Component } from 'react';
import styles from './card.module.css';

class Card extends Component {
  constructor(props){
    super(props);
   
  }
  render(){

    return(
      <div className={styles.card} >
        <div className={styles.title}>
          <p>{this.props.title}</p>
        </div>
        <div className={styles.price}>
          <p>Price : {this.props.price}</p>
        </div>
        <div className={styles.button}>
          <button>Buy</button>
        </div>
    </div>
    )
  }
}

export default Card;