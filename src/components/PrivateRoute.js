// import necessary utility from rrd
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isSignIn = false;

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isSignIn ? <Component {...props} /> : <Redirect to="/signin" />
        }
      />
    </>
  );
}

// create component here
