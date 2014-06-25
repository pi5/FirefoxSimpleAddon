// Send a message to the addon script anytime a hashchange occurs on the url
window.onhashchange = notifyAddon;

function notifyAddon() {
	console.log("Hash Changed");
	self.port.emit('hashchange', window.location.href);
}

