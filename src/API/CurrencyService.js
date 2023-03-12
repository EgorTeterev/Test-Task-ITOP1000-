export default class CurrencyService {
  static rightExchange(currency1,currency2,rates){
    if(currency1==='UAH' && currency2!==null){
        let exchange = 1
        for(let i = 0;i<rates.length;i++){
          if(rates[i].cc===currency2){
            exchange=rates[i].rate
          } 
        }
        return exchange
      } else if(currency1!==null && currency2==="UAH"){
        let exchange = 1
        for(let i = 0;i<rates.length;i++){
          if(rates[i].cc===currency1){
            exchange=rates[i].rate
          } 
        }
        return exchange
      } else if(currency1==currency2){
        return 1
      } else if (currency1 !== "UAH" && currency2!=="UAH" && currency1!==null && currency2!==null){
        let a = 1
        let b = 1
        for(let i = 0;i<rates.length;i++){
          if(rates[i].cc==currency1){
            a =rates[i].rate
          } else if (rates[i].cc==currency2){
            b = rates[i].rate
          }
        }
        let exchange = b/a
        return exchange
      }
  }
}