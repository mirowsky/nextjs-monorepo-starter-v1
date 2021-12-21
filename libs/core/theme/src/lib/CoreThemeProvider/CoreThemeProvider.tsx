import {
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from '@mui/material';

/* eslint-disable-next-line */
export interface CoreThemeProviderProps {
  children?: React.ReactNode;
}

export function CoreThemeProvider({ children }: CoreThemeProviderProps) {
  return (
    <MaterialThemeProvider theme={{}}>
      <CssBaseline />
      {children}
    </MaterialThemeProvider>
  );
}

export default CoreThemeProvider;
