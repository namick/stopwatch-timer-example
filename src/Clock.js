import React from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'

export function Clock({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minWidth="256px"
      padding={3}
      borderRadius="8px"
      margin={2}
      clone
    >
      <Paper children={children} />
    </Box>
  )
}
