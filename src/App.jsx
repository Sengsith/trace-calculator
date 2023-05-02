import { useState } from 'react'
import './App.css'

function App() {
  const [blueValue, setBlueValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [runs, setRuns] = useState(0);
  
  const handleBlue = (e) => {
    setBlueValue(e.target.value);
    calculateRuns(e.target.value,  greenValue);
  }

  const handleGreen = (e) =>  {
    setGreenValue(e.target.value);
    calculateRuns(blueValue, e.target.value);
  }

  const calculateRuns = (blue, green) => {
    const result = Math.ceil(((blue * 3) - green) / 3);
    setRuns(result);
  }

  return (
    <>
      <h1>Trace Calculator</h1>
      <div className="card">
        <div className="item">
          <label for="blue-value">Blue required:
            <input id="blue-value" value={blueValue} onChange={handleBlue}></input>
          </label>
        </div>
        <div className="item">
          <label for="green-value">
            Green Owned:
            <input id="green-value" value={greenValue} onChange={handleGreen}></input>
          </label>
        </div>
        <div>You need to do <span id="runs">{runs}</span> runs!</div>
      </div>
    </>
  )
}

export default App
