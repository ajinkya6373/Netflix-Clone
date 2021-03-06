
import React from 'react'
import { BrowserRouter as Router, Switch, } from 'react-router-dom';
import * as ROUTES from "./constants/routes"
import { Home, Browse, Signup, Signin } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import {useAuthListener} from "./hooks"


export default function App() {
  const {user} = useAuthListener();
  // console.log(user)
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >
          <Signup />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>

        <ProtectedRoute
          user={user}
          path={ROUTES.BROWSE}
          exact
        >
          <Browse />
        </ProtectedRoute>


      </Switch>
    </Router>
  );
}


