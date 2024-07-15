
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // useRef Hook
  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = " "
    let str = "ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "1234567890"
    }

    if (charAllowed) {
      str += "!@#$%^&*()~{}[]?/"
    }

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 100)
  window.navigator.clipboard.writeText(password)
}, [password])


  useEffect(() => {
    passwordgenerator()
  },[length, numberAllowed, charAllowed, setPassword ]);


  return (
    <>
      <div className="flex">
        <div className='w-full justify-center text-lg text-orange-500 bg-gray-700 rounded-lg px-8 py-8 my-10 mx-10 shadow-md '>
          <div className='flex flex-wrap justify-center mb-2'>Password Generator</div>

          <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
            <input type='text' 
            value={password}
              className='outline-none w-full py-1 px-3 '
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-600 text-white px-3 shrink-0'>Copy</button>
          </div>
          <div className='flex text-md gap-x-3'>

            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => { setLength(e.target.value) }}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => { setNumberAllowed((prev) => !prev) }}
              />
              <label> Numbers </label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                defaultChecked={charAllowed}
                id='characterInput'
                onChange={() => { setCharAllowed((prev) => !prev) }}
              />
              <label>Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;