import './App.scss';
import { PublicRoutes, PrivateRoutes } from './routes';
import { 
  BrowserRouter as Router, 
  Redirect, 
  Route, 
  Switch 
} from "react-router-dom";
import { getLocalStorage } from './lib/session';
import { I18nProvider, LOCALES } from './i18n';
import { useSelector } from 'react-redux';

function App(props) {
  const lang = useSelector(state => state.config.lang)
  const PrivateRoute = (props) => {
    if(!getLocalStorage('token')){
      return <Redirect to={{pathname:"/auth"}} />
    }
    return <Route exact {...props} />
  }

  return (
    <I18nProvider locale={lang || LOCALES.ENGLISH}>
      <Router>
        <Switch>
          {PublicRoutes.map(({ component: Cmp, ...route }, index) => 
            <Route 
              exact 
              key={'publicRoute' + index} 
              {...route}
              render={routeProps => <Cmp {...props} {...routeProps} />} 
            />
          )}

          {PrivateRoutes.map(({ component: Cmp, ...route }, index) => 
            <PrivateRoute 
              exact 
              key={'privateRoute' + index} 
              {...route}
              render={routeProps => <Cmp {...props} {...routeProps} />} 
            />
          )}
        </Switch>
      </Router>
    </I18nProvider>
  );
}

export default App;
