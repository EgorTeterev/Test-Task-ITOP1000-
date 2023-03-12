import axios from 'axios';

export default class RatesService {
  static async getRates(){
    const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    const rates= []
    response.data.forEach(element => {
      if (element.cc === 'USD' ||element.cc ==='EUR') {
        rates.push(element)
      }
    });
    return rates
  }
}