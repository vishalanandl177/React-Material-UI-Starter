import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#068edf',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
  typography: {
    useNextVariants: true,
  }
});

export default Theme;