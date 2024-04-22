import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useAuthentication } from '../../../src/context/AuthContext';
export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuthentication();
  
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };