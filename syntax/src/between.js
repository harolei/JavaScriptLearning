 var between = function (string, start, end) {
	var startAt = string.indexOf(start) + start.length;
	var endAt = string.indexOf(end, startAt);
	return string.slice(startAt, endAt);
};
exports.between = between;


