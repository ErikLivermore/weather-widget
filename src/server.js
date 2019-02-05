import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import configureStore from './store';
import appSaga from './saga';
import { Provider } from 'react-redux';
import App from './components/App';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src');
app.use('/static', express.static('public'));

app.get('/', async (req, res) => {
	const context = {};
	const store = configureStore({});

	// The following concept makes redux-saga work correctly with server-side rendering
	// Taken from https://medium.com/@navgarcha7891/react-server-side-rendering-with-simple-redux-store-hydration-9f77ab66900a

	const rootComponent = (
		<Provider store={store}>
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		</Provider>
	);

	store.runSaga(appSaga).done.then(() => {
		const state = store.getState();
		res.render('layout', {
			state: JSON.stringify(state),
			content: ReactDOMServer.renderToString(
				rootComponent
			)
		});
	});

	ReactDOMServer.renderToString(
		rootComponent
	);
	store.close();
});

app.listen(3000, () => console.log('App listening at 3000'));
