import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route} from 'react-router';
import Loadable from 'react-loadable';
import { withStyles } from '@material-ui/core/styles';

import { store, history } from './store';
import HeaderComponent from './components/header/index';

const HomePageLoadable = Loadable({
  loader: () => import('./components/homePage/index'),
  loading: () => <p>Loading...</p>,
  delay: 500
})

const ListLoadable = Loadable({
  loader: () => import('./components/myList/index'),
  loading: () => <p>Loading...</p>,
  delay: 500
})

const Styles = theme => ({
  mT15vh: {
    marginTop: '15vh'
  },
  App: {
    textAlign: 'center'
  }
})

const App = (props) => {
  const { classes } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className={classes.App}>
          <header>
            <HeaderComponent />
          </header>
          <Switch>
            <Route exact path="/" component={(props) => <HomePageLoadable {...props} classes={classes} />}/>
            <Route path="/mylist" component={(props) => <ListLoadable {...props} classes={classes} />}/>
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default withStyles(Styles)(App);
