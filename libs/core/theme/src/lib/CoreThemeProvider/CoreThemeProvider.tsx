import {
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from '@mui/material';
import GlobalStyles from '../GlobalStyles/GlobalStyles';

/* eslint-disable-next-line */
export interface CoreThemeProviderProps {
  children?: React.ReactNode;
}

export function CoreThemeProvider({ children }: CoreThemeProviderProps) {
  return (
    <MaterialThemeProvider theme={{}}>
      <GlobalStyles />
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
}

export default CoreThemeProvider;
