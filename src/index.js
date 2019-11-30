import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { useStopwatch, useTimer } from './useClock'
import { Container } from './Container'
import { Buttons } from './Buttons'
import { Clock } from './Clock'
import { TimeDisplay } from './TimeDisplay'
import { TimeContainer } from './TimeContainer'
import { theme } from './theme'

function App() {
  return (
    <Container>
      <Stopwatch />
      <Timer initialTime={7 * 1000} />
    </Container>
  )
}

function Stopwatch() {
  const { runningTime, ...other } = useStopwatch()

  return (
    <Clock>
      <TimeDisplay time={runningTime} />
      <Buttons {...other} />
    </Clock>
  )
}

function Timer({ initialTime }) {
  const { runningTime, isDone, ...other } = useTimer(initialTime)

  return (
    <Clock>
      {!isDone && <TimeDisplay time={runningTime} />}
      {isDone && <TimeContainer>Time's Up!</TimeContainer>}
      <Buttons {...other} />
    </Clock>
  )
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
