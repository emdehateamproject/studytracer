// import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Navigate, useRoutes } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Router from './routes/Router';

import { baselightTheme } from './theme/DefaultColors';
import { useAuthentication } from './context/AuthContext';

function App() {

    const useAuthRoutes = (routes) => {
      const { authenticated } = useAuthentication();
      // const token = localStorage.getItem('token');
      console.log('auth', authenticated);

      return useRoutes(
          routes.map((route) => {
              if (route.private && !authenticated) {
                  return {
                      ...route,
                      element: <Navigate to="/auth/login" replace />
                  };
              }
              return route;
          })
      );
  };
  const routing = useAuthRoutes(Router);
  const theme = baselightTheme;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {routing}
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
