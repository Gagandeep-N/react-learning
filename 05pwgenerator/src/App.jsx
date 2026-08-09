import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@`#$%^&*"

    for(let i=0; i<length; i++){
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() =>{
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  const handleCopy = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none bg-white w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
          readonly
        />
        <button onClick={handleCopy} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>

      <div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              onChange={(event) => setLength(event.target.value)}
            />
            <label>Length: {length}</label>
          </div>
        </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }
              }
            />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={characterAllowed}
              onChange={() => {
                setcharacterAllowed((prev) => !prev)
              }}
            />
            <label>Characters</label>
          </div>
      </div>

    </div>
  )
}

export default App
