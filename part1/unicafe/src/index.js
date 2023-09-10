import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good !== 0 || neutral !== 0 || bad !== 0){
  return(
    <div>
      <table>
        <tbody>
        <StatisticsLine text={'good'} value={good}/>
        <StatisticsLine text={'neutral'} value={neutral}/>
        <StatisticsLine text={'bad'} value={bad}/>
        <StatisticsLine text={'all'} value={good + neutral + bad}/>
        <StatisticsLine text={'average'} value={(good + (bad * -1)) / (good + neutral + bad)}/>
        <StatisticsLine text={'positive'} value={(good / (good + neutral + bad)) * 100}/>
        </tbody>
      </table>
    </div>
  )
}
return(
  <h2>No feedback given</h2>
)
}

const StatisticsLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good'/>
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
        <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      </div>
      <div>
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);