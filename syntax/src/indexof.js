function catNames(paragraph){
	var colon = paragraph.indexOf(":");
	return paragraph.slice(colon + 2).split(", ");
}
document.write(catNames("born 20/09/2004 (mother Yellow Bess): " + "Doctor Hobbles the 2nd, Noog"));