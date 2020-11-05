import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BridgesContext } from './state/bridgesContext';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';

import 'antd/dist/antd.less';
import './styles/sass/index.scss';

import { NotFoundPage } from './components/pages/NotFound';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { UserTable } from './components/pages/TablePage';
import { DetailsCard } from './components/pages/DetailsPage';
import HomePageReact from './components/pages/HomePage/HomePageContent';
import { FormikForm } from './components/pages/Form';
import addABridge from './components/pages/Form/AddABridge';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const [bridgeData, setBridgeData] = useState();
  const [detailsData, setDetailsData] = useState();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#009149',
        light: '#4ec275',
        dark: '#00621e',
      },
    },
  });

  return (
    <BridgesContext.Provider
      value={{ bridgeData, setBridgeData, detailsData, setDetailsData }}
    >
      <Security {...config} onAuthRequired={authHandler}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/implicit/callback" component={LoginCallback} />
            {/* any of the routes you need secured should be registered as SecureRoutes */}
            <Route exact path="/" component={HomePageReact} />
            <SecureRoute path="/table" component={UserTable} />
            <SecureRoute path="/details/:cardId" component={DetailsCard} />
            <SecureRoute path="/form" component={FormikForm} />
            <SecureRoute path="/addabridge" component={addABridge} />
            <Route component={NotFoundPage} />
          </Switch>
        </ThemeProvider>
      </Security>
    </BridgesContext.Provider>
  );
}
