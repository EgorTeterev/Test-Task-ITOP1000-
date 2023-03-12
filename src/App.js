import { useEffect, useState } from 'react';
import '../src/styles/App.css'
import CurrencyService from './API/CurrencyService';
import RatesService from './API/RatesService';
import Header from "./components/UI/header/Header";
import RatesBlock from './components/UI/ratesBlock/RatesBlock';




function App() {
  const [currency1,setCurrency1] = useState('UAH')
  const [currency2,setCurrency2] = useState('USD')
  const [rates,setRates]=useState([])
  const [exchange,setExchange] = useState()
  const [amount,setAmount]=useState(1)
  const [amountCurrency,setAmountCurrency]=useState(true)

  let toAmount,fromAmount 
  
  if(amountCurrency){
    fromAmount = amount
    toAmount = amount * exchange
  } else {
    toAmount = amount
    fromAmount = amount/exchange
  }


  useEffect(()=>{
    fetchRates()
  },[])

  useEffect(()=>{
   let exchange = CurrencyService.rightExchange(currency1,currency2,rates)
   setExchange(exchange)
  },[currency1,currency2])

  async function fetchRates(){
    const rates = await RatesService.getRates()
    setRates(rates)
    setExchange(rates[0].rate)
  }


  function toAmountChangeHandler(e){
    setAmount(e.target.value)
    setAmountCurrency(true)
  }

  function fromAmountChangeHandler(e){
    setAmount(e.target.value)
    setAmountCurrency(false)
  }


  return (
    <div className="App">
     <Header rates = {rates}></Header>
     <div className='container'>
        <RatesBlock 
         rates={rates}
         selectedCurrency={currency1} 
         changeCurrency={e=>setCurrency1(e.target.value)}
         changeAmount ={toAmountChangeHandler}
         amount = {fromAmount}
         />
        <RatesBlock 
         rates={rates} 
         selectedCurrency={currency2}
         changeCurrency={e=>setCurrency2(e.target.value)}
         changeAmount ={fromAmountChangeHandler}
         amount = {toAmount}
        />
     </div>
    </div>
  );
}

export default App;
