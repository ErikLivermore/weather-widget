import get from 'lodash/get';

export const weatherSelector = (state) => {
	return get(state, ['weatherReducer', 'weatherData']);
}