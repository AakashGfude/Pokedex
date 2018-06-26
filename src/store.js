import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router'

import reducer from './reducers'  
import rootSaga  from './sagas'
import { addHistory } from './sagas/history'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  connectRouter(history)(reducer),
  compose(applyMiddleware(routerMiddleware(history),sagaMiddleware))
)

// then run the saga
sagaMiddleware.run(rootSaga)

history.listen(location => store.dispatch({type:'ADD_HISTORY', payload: location}))

export {
    history,
    store
}