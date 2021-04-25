
import './index.css';
import { React, useState } from 'react';
import { isPrime, isFibonacci } from './components/solve';

let startAt = performance.now();
const App = () => {

  const [state, setState] = useState({
    num: 0,
    defaultMode: "isPrime",
  });
  const { num, defaultMode } = state;

  const handleInputChange = (e) => {
    if(e.target.value  < 0) { // if negative value
      setState({ ...state, num : 1})
    } else {
      setState({ ...state, num: Math.round(e.target.value).toFixed(0) });
    }
  }

  const handleChangeMode = (e) => {
    setState({ ...state, defaultMode: e.target.value})
  }

  console.log(state);
  return (
    <div style={mainLayoutStyle} >
      <div style={columnOneStyle} >
        <div style={oneContentStyle} >
          {/* input number here */}
          <input type='number' pattern="[0-9]*" value={num}  onChange={handleInputChange} />

        </div>
      </div>

      <div style={{borderLeft: '1px solid black', height: '100vh'}} />

      <div style={columnTwoStyle} >
        <div style={twoContentStyle} >
          {/* select mode here */}
          <select value={defaultMode} onChange={handleChangeMode} >
            <option value={'isPrime'} > isPrime </option>
            <option value={'isFibonacci'} > isFibonacci </option>
          </select>
          <h5>
            State : {JSON.stringify(state)}
          </h5>
        </div>
      </div>

      <div style={{borderLeft: '1px solid black', height: '100vh'}} />

      <div style={columnThreeStyle} >
        {/* result here */}
        { defaultMode === 'isPrime' ? 
          (<div style={{color: 'red'}} >{String(isPrime(num))}</div>) : 
          (<div style={{color: 'green'}} >{String(isFibonacci(num))}</div>) }

      </div>
    </div>
  );
};
//  CSS code
const mainLayoutStyle = {
  display: 'flex'
}

const columnOneStyle = {
  height: '100vh',
  width: '200px',
  flex: '0 0 auto',
  minWidth: '100px',
  backgroundColor: 'white',
}

const oneContentStyle = {
  minWidth: '600px',
}

const columnTwoStyle = {
  height: '100vh',
  flex: '1',
  overflow: 'scroll',
  minWidth: '100px',
  backgroundColor: 'white',
}

const twoContentStyle = {
  minWidth: '600px'
}

const columnThreeStyle = {
  width: '300px',
  height: '100vh',
  flex: '0 0 auto',
  fontSize: '20px',
  backgroundColor: 'white'
}
let endAt = performance.now();
console.log(`performance: ${(endAt - startAt).toFixed(4)}`);

export default App;
