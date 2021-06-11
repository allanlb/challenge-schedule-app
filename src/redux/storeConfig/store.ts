// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk';
import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { RootState } from './state';

// ** Dev Tools
let middleware = applyMiddleware(thunk);
if (process.env.NODE_ENV !== 'production') {
  middleware = composeWithDevTools(middleware);
}
// ** Create store
const store = createStore(rootReducer as any, {} as RootState, middleware) as Store<RootState>

export { store }
