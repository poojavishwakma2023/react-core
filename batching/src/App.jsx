import { useState } from 'react'

import { flushSync } from 'react-dom'

import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [name , setName] =useState('unkown')

  const handleCountwtBatching = () => {
    setCount1(count1 + 1)
    setCount1(count1 + 1)
    setCount1(count1 + 1)
    console.log('count1', count1)

  //  flushSync(()=>setName('inchhara'))
    
     setCount1(count1 + 1)

  }

  const handleCountwthtbatching = () => {
    setCount2(prev => prev + 1)
    setCount2(prev => prev + 1)
    setCount2(prev => prev + 1)
    console.log('count2', count2)
  }

  return (
    <>
      <section id="center">

        <div>
          <h1>Batching </h1> <h5>Author - {name} </h5>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => handleCountwtBatching()}
        >
          Count1 is {count1}

        </button>
        <h4>Batching - groups all state updates into single re-render </h4>

        <button
          type="button"
          className="counter"
          onClick={() => handleCountwthtbatching()}
        >
          Count2 is {count2}

        </button>
        <h4>Batching - ignoring by passing updater function </h4>
      </section>

      <div className="ticks"></div>

      <section id="center">
        <div id="docs">
          {/* <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg> */}
          <h2>Documentation - explore  more </h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://app.notion.com/p/Batching-react-17-18-19-3a56f3da9a7780f49711f9d614f676bc" target="_blank">
                from notion
              </a>
            </li>
            <li>
              <a href="https://react.dev/learn/queueing-a-series-of-state-updates" target="_blank">
                from  react 
              </a>
            </li>
          </ul>
        </div>

      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
