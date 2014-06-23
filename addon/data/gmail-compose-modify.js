// Fetch the first compose window. TODO:Refine the way the compose window is fetched
var composeWindows = document.querySelectorAll('div.editable.Am.Al');
var iframeContainer = composeWindows[0];
var iframe = iframeContainer.childNodes[0];
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

var iconDiv = innerDoc.createElement('div');
// TODO: Fetch images from current source instead of external link
iconDiv.innerHTML = '<img src="http://cdn-static.zdnet.com/i/story/60/52/001470/firefox-logo_small.png" height="96" width="96"><br>';


// TODO: Prepend instead of appending. Note: If the image is prepended, it does not appear after email is received.
innerDoc.body.appendChild(iconDiv);
