import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './components/App';
import fetch from 'node-fetch';

const server = express();
server.set('view engine', 'ejs');
server.set('views', 'src');
server.use('/static', express.static('public'));

async function getWeatherData(city) {
	const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",dk&appid=166d00e26d3ff2c6149e89feccc5c59a&units=metric";
	const response = await fetch(weatherUrl);
	return await response.json();
}

server.get('*', async (req, res) => {
	const weather = await getWeatherData('Copenhagen');
	const context = {};
	res.render('layout', {
		content: ReactDOMServer.renderToString(
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		)
	});
});

server.listen(3000, () => console.log("Listening on port 3000"));