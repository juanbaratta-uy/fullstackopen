import React, { useState } from 'react' ;
import ReactDOM from 'react-dom/client';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const maxIndex = points.indexOf(Math.max(...points))

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
      </div>
      <div>
        <Button handleClick={() => setSelected(parseInt(Math.random() * anecdotes.length))} text='next anecdote'/>
        <Button handleClick={handleVote} text='vote'/>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[maxIndex]}</p>
        <p>has {points[maxIndex]} votes</p>
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
