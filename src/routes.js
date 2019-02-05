import NotFound from './components/NotFound';
import Weather from './components/Weather';

export default [
	{
		path: '/', component: Weather,
	},
	{
		path: '/weather', component: Weather
	},
	{
		component: NotFound
	}
]