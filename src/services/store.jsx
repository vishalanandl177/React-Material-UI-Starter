import { createStore } from 'redux';
import reducers from './reducers';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

    
const middleware = [thunk];

const store = createStore(reducers, 
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// store.subscribe(() => {
//     return store.getState();
// });

// store.dispatch({ type: 'TEST', user: 'UserName'});

export default store;