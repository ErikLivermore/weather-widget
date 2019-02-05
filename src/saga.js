import { put, call, fork, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import getWindDirString from './util';

function* getWeatherData(data) {
	const city = data.city;
	try {
		const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + ",dk&appid=166d00e26d3ff2c6149e89feccc5c59a&units=metric";
		const responseData = yield fetch(weatherUrl).then(res => res.json());
		const weatherData = {
			city: responseData.name,
			temp: responseData.main.temp,
			humidity: responseData.main.humidity,
			windSpeed: responseData.wind.speed,
			windDir: getWindDirString(responseData.wind.dir)
		}
		yield put({ type: 'weather-data-updated', weatherData });
	} catch (err) {
		yield put({ type: "get-weather-data-failed", err });
	}
}

function* watchGetWeatherData() {
	yield takeLatest('refresh-weather-data', getWeatherData);
}

export default function* appSaga() {
	yield fork(watchGetWeatherData);
}