function between(string, start, end) {
	var startAt = string.indexOf(start) + start.length;
	var endAt = string.indexOf(end, startAt);
	document.write(endAt);
	return string.slice(startAt, endAt);
}

document.write(between("Your mother!", "{-", "-}"));
