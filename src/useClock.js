import React from 'react'

const useClock = ({ counter, initialTime = 0 }) => {
  const [isCounting, setIsCounting] = React.useState(false)
  const [runningTime, setRunningTime] = React.useState(initialTime)
  const [isDone, setIsDone] = React.useState(false)

  const intervalId = React.useRef()

  const startCounting = () =>
    (intervalId.current = setInterval(intervalCallback(), 0))

  const stopCounting = () => clearInterval(intervalId.current)

  const intervalCallback = () => {
    const startTime = new Date().getTime()

    return () => setRunningTime(counter(startTime, runningTime))
  }

  React.useEffect(() => {
    if (runningTime <= 0) {
      stopCounting()
      setIsDone(true)
    }
  }, [runningTime])

  React.useEffect(() => stopCounting, [])

  const handleStartStop = () => {
    isCounting ? stopCounting() : startCounting()
    setIsCounting(!isCounting)
  }

  const handleReset = () => {
    stopCounting()
    setIsCounting(false)
    setIsDone(false)
    setRunningTime(initialTime)
  }

  return { runningTime, handleStartStop, handleReset, isCounting, isDone }
}

const useStopwatch = () =>
  useClock({
    counter: (startTime, runningTime) =>
      runningTime + new Date().getTime() - startTime,
  })

const useTimer = initialTime =>
  useClock({
    counter: (startTime, runningTime) =>
      runningTime - new Date().getTime() + startTime,
    initialTime,
  })

export { useStopwatch, useTimer }
