import React from 'react';
import classes from './Header.module.css'

const Header = (props) => {

  return (
    <header className={classes.header}>
      {props.rates.map((rate)=>
     <div className={classes.rateHandler} key={rate.cc}>
        <div>{rate.cc}</div>
        <div>{rate.rate}</div>
     </div>
      )}
    </header>  
  );
};

export default Header;