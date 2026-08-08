import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if(counter === 20) return;
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    if(counter === 0) return;
    setCounter(counter - 1);
  }

  return (
    <>
      <h2>Counter value: {counter}</h2>

      <button onClick={handleIncrement}>Increment value</button>
      <br/>
      <button onClick={handleDecrement}>Decrement value</button>
    </>
  )
}

export default App
