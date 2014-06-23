// Fetch the first compose window. TODO:Refine the way the compose window is fetched
//var tabs = require("sdk/tabs");

var urlMatch = /.*mail.google.com.*compose=.*/;
var currentTabUrl = document.location.href;

if (currentTabUrl.match(urlMatch)) {
	var composeWindows = document.querySelectorAll('div.editable.Am.Al');
	var iframeContainer = composeWindows[0];
	var iframe = iframeContainer.childNodes[0];
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

	var iconDiv = innerDoc.createElement('div');
	iconDiv.innerHTML = '<img src="http://people.mozilla.org/~faaborg/files/shiretoko/firefoxIcon/firefox-128-noshadow.png" height="96" width="96"><br>';

	// TODO: Prepend instead of appending. Note: If the image is prepended, it does not appear after email is received.

	console.log(currentTabUrl);
		// TODO: Provide option for placing icon either on top or bottom 
		innerDoc.body.insertBefore(iconDiv, innerDoc.body.childNodes[0]);
		console.log("Bugs bunny says yay!!!");
	}
else {
	console.log("Bugs bunny says booo :(");
}
