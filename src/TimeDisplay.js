import React from 'react'
import Box from '@material-ui/core/Box'

import formatTime from './formatTime'
import { TimeContainer } from './TimeContainer'

export function TimeDisplay({ time }) {
  let { hours, minutes, seconds, milliseconds } = formatTime(time)

  return (
    <TimeContainer>
      {hours && <Box>{hours}:</Box>}
      {minutes && <Box>{minutes}:</Box>}
      <Box width="3rem">{seconds}</Box>
      <Box fontSize="1.2rem" width="2.2rem" margin="4px">
        {milliseconds}
      </Box>
    </TimeContainer>
  )
}
