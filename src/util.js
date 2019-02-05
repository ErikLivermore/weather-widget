
export default function getWindDirString(degree) {
	if (degree > 337.5) { return 'Nord'; }
	if (degree > 292.5) { return 'Nordvest'; }
	if (degree > 247.5) { return 'Vest'; }
	if (degree > 202.5) { return 'Sydvest'; }
	if (degree > 157.5) { return 'Syd'; }
	if (degree > 122.5) { return 'Sydøst'; }
	if (degree > 67.5) { return 'Øst'; }
	if (degree > 22.5) { return 'Nordøst'; }
	return 'Nord';
}