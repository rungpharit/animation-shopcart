import React, { Component } from 'react';
import styles from './navbar.module.css';
import logo from '../../images/navbar/logo.svg';
import cart from '../../images/navbar/shopping-cart.png'

class Navbar extends Component {
  render(){
    return(
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={logo} alt="logo"/>
          </div>
          <div className={styles.cart}>
          <img src={cart} alt="cart"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;