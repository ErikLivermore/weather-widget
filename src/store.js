import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import weatherReducer from './weatherReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default function configureStore(initialState) {
	const rootReducer = combineReducers({
		weatherReducer
	});
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);

	store.runSaga = sagaMiddleware.run;
	store.close = () => store.dispatch(END);

	return store;
};
