const initialState = { weatherData: {} };

export default (state = initialState, action) => {
	switch (action.type) {
		case 'weather-data-updated':
			return {
				...state,
				weatherData: action.weatherData
			};
		default:
			return state;
	}
};
