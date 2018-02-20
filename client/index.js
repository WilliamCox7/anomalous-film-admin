import { React, ReactDOM, thunk, Provider, createStore, applyMiddleware, compose } from './packages';
import root from './root';
import App from './App';

let store = createStore(
  root, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);
