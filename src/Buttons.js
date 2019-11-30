import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

export function Buttons({ handleStartStop, handleReset, isCounting }) {
  const startStopText = isCounting ? 'Stop' : 'Start'

  return (
    <ButtonGroup fullWidth>
      <Button color="primary" onClick={handleStartStop}>
        {startStopText}
      </Button>
      <Button color="primary" onClick={handleReset}>
        Reset
      </Button>
    </ButtonGroup>
  )
}
