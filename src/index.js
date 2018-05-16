import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/index';

const store = createStore(
    reducer,
    applyMiddleware(thunk));

	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<Route component={App} />
			</Provider>
		</BrowserRouter>,document.getElementById("root")
	);
  registerServiceWorker();
