function startwith(string, pattern) {
	return string.slice(0, pattern.length) == pattern;
}

alert(startwith("rotation","rot"));
alert(startwith("Idiots", "Idiots example"));
