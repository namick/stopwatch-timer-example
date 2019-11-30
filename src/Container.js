import React from 'react'
import Box from '@material-ui/core/Box'

export function Container({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      children={children}
    />
  )
}
