import { createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import yellow from '@material-ui/core/colors/yellow'

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: lightBlue['A200'] },
    secondary: { main: yellow['200'] },
  },
})
