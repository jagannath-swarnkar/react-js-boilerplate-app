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
import { useDispatch, useSelector } from 'react-redux';
import NetworkDetector from './hoc/NetworkDetector';
import React, { useEffect } from 'react';
import ThemeContext from './context/ThemeContext';
import { setMobileView } from './redux/actions/auth.action';
import { detectDevice } from './lib/global';
import DrawerHoc from './hoc/drawerHoc';
import DialogHoc from './hoc/dialogHoc';
import { customTheme } from './lib/theme';
import { actionThemeChange } from './redux/actions/home.action';
import LoaderHoc from './hoc/loader';

function App(props) {
  const dispatch = useDispatch()
  const lang = useSelector(state => state.store.lang);
  const theme = useSelector(state=>state.store.theme) || 'light';
  const currentTheme = customTheme[theme];
  
  const PrivateRoute = (props) => {
    if(!getLocalStorage('token')){
      return <Redirect to={{pathname:"/auth"}} />
    }
    return <Route exact {...props} />
  }

  
  useEffect(()=>{
   dispatch(setMobileView(detectDevice()))
  },[dispatch])

  useEffect(()=>{
    const defTheme = getLocalStorage('theme')
    if(defTheme){
      dispatch(actionThemeChange(defTheme))
    }
  },[])


  return (
    <React.Fragment>
      <Router>
        <ThemeContext.Provider value={theme}>
          <div className="App App__theme">
            <I18nProvider locale={lang || LOCALES.ENGLISH}>
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
            </I18nProvider>
          </div>
          <DrawerHoc></DrawerHoc>
          <DialogHoc></DialogHoc>   
          <LoaderHoc></LoaderHoc>
        </ThemeContext.Provider>
      </Router>
      <style jsx="true">{`
        .App__theme {
          background-color: ${currentTheme.backgroundColor};
          color: ${currentTheme.textColor};
        }
      `}</style>
    </React.Fragment>
  );
}

export default NetworkDetector(App);