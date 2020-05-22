import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)


const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral
  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="total" value={total} />
            <Statistic text="average" value={(good * 1 + bad * -1) / total} />
            <Statistic text="positive" value={(good / total * 100) + '%'} />
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const goodReview = () => setGood(good + 1)
  const neutralReview = () => setNeutral(neutral + 1)
  const badReview = () => setBad(bad + 1)


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodReview} text="good" />
      <Button handleClick={neutralReview} text="neutral" />
      <Button handleClick={badReview} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)