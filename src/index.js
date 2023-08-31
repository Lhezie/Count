import React, {useState} from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [addCount, setCount] = useState(0)
  const [addStep, setAddstep] = useState(1)
  const currentDate = new Date()
  const modifiedDate = new Date(currentDate.getTime())
  modifiedDate.setDate(currentDate.getDate() + addCount)

  return (
    <div>
      <Steps addStep={addStep} setAddstep={setAddstep} />
      <Count
        addCount={addCount}
        setCount={setCount}
        addStep={addStep}
        setAddstep={setAddstep}
      />
      <p>
        <span>
          {addCount === 0
            ? 'Today is '
            : addCount > 0
            ? `${addCount} day(s) from today is `
            : `${addCount} days ago was `}
        </span>
        <span>{modifiedDate.toDateString()}</span>
      </p>
    </div>
  )
}

function Steps({addStep, setAddstep}) {
  return (
    <div>
      <div style={{display: 'flex', padding: '4px'}}>
        <button onClick={() => setAddstep((addStep) => addStep - 1)}>-</button>
        <div style={{padding: '4px'}}>Step : {addStep}</div>
        <button onClick={() => setAddstep((addStep) => addStep + 1)}>+</button>
      </div>
    </div>
  )
}

function Count({addCount, setCount, addStep, setAddstep}) {
  return (
    <div>
      <div style={{display: 'flex', padding: '4px'}}>
        <button onClick={() => setCount((ad) => ad - addStep)}>-</button>
        <div style={{padding: '4px'}}>Count : {addCount}</div>
        <button onClick={() => setCount((ad) => ad + addStep)}>+</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
