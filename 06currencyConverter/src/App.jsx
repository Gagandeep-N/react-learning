import { useState } from 'react'
import './App.css'
import useCurrencyConvert from './hooks/useCurrencyConvert'
import InputCurrency from './components/InputCurrency'
function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');

  const currencyInfo = useCurrencyConvert(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(currencyInfo[to]);
  }

  return (
    <>
      <h1>Currency Converter</h1>
      <InputCurrency
       amount = {amount}
       onAmountChange = {(amount) => setAmount(amount)}
       selectCurrency={from}
       onCurrencyChange={(currency) => setFrom(currency)}
       currencyOptions={options}
      />
      <InputCurrency
        amount={convertedAmount}
        onAmountChange = {(convertedAmount) => setConvertedAmount(convertedAmount)}
        selectCurrency={to}
        onCurrencyChange={(currency) => setTo(currency)}
        currencyOptions={options}
      />
      <br/>

      <button onClick={convert}>Convert</button>
    </>
  )
}

export default App
