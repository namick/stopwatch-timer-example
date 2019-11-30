import React from 'react'
import Box from '@material-ui/core/Box'

export function TimeContainer({ children }) {
  return (
    <Box
      display="flex"
      alignItems="flex-end"
      paddingBottom={2}
      paddingLeft="10px"
      fontFamily="Tomorrow"
      color="secondary.main"
      fontSize="2rem"
      letterSpacing={3}
      children={children}
    />
  )
}
