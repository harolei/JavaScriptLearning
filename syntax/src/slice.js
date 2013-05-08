var startwith = function(string, pattern) {
	return string.slice(0, pattern.length) == pattern;
};
exports.startwith = startwith;

