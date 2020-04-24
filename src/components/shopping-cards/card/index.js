import React, { Component } from 'react';
import styles from './card.module.css';

class Card extends Component {
  constructor(props){
    super(props);
    this.buyProduct = this.buyProduct.bind(this);
    this.cardRef = React.createRef();
  }

  buyProduct(){
    let product = {
      id:this.props.id,
      title:this.props.title,
      price:this.props.price
    }
    console.log('prodcut: ',product);

    let classNameofCartFromNavbar = 'navbar_cart__2slL9';
    let cartImage = document.getElementsByClassName(classNameofCartFromNavbar);

    let cardAnimate = document.getElementsByClassName(this.cardRef.current.className)[this.props.id];
    let cardClone = cardAnimate.cloneNode(true);

    cardClone.style = 'background-color:white;   opacity:0.8;position:fixed;top:' + (this.cardRef.current.offsetTop - 30) + 'px; left:' + this.cardRef.current.offsetLeft + 'px;transition: left 0.3s, top 0.3s,width 0.5s , opacity 0.2s cubic-bezier(1, 1, 1, 1)';

    let rechange = document.body.appendChild(cardClone);

    setTimeout(() => {
      cardClone.style.left = (cartImage[0].offsetLeft) + 'px';
      cardClone.style.top = (cartImage[0].offsetTop) + 'px';
      cardClone.style.opacity = '0';
    }, 100);

    setTimeout(() => {
      rechange.parentNode.removeChild(rechange);
    }, 2000);
  }
  
  render(){
    return(
      <div className={styles.card} ref={this.cardRef} >
        <div className={styles.title}>
          <p>{this.props.title}</p>
        </div>
        <div className={styles.price}>
          <p>Price : {this.props.price}</p>
        </div>
        <div className={styles.button}>
          <button onClick={() => {this.buyProduct()}}>Buy</button>
        </div>
    </div>
    )
  }
}

export default Card;