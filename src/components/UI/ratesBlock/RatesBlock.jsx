import React from 'react';
import classes from './RatesBlock.module.css';

const RatesBlock = ({rates,selectedCurrency,changeCurrency,amount,changeAmount}) => {
  return (
    <div className={classes.ratesBlock}>
     <input  className={classes.input} value={amount.toFixed(4)} onChange={changeAmount}/>
     <select value={selectedCurrency} className={classes.select} onChange={changeCurrency} >
        <option value='UAH'>UAH</option>
        {rates.map((option)=>
          <option value ={option.cc} key={option.cc}>{option.cc}</option>
        )}
     </select>
    </div>
  );
};

export default RatesBlock;