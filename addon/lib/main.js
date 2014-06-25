var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

var button = buttons.ActionButton({
  id: "style-tab",
  label: "Style Tab",
  icon: {
	    "16": "./icon-16.png",
	    "32": "./icon-32.png",
	    "64": "./icon-64.png"
	  },
	disabled:true,
  onClick: handleClick
});

function handleClick(state) {
	tabs.activeTab.attach({
		contentScriptFile: self.data.url("gmail-compose-modify.js")
	});
}

// Insert a listener into all mail.google.com pages
// TODO: pageMod Vs. pageWorker
pageMod.PageMod({
  include: "*.mail.google.com",
	contentScriptFile: self.data.url("notify-hashchange.js"),
	onAttach: startListening	
});


// Listen
function startListening(worker) {
	worker.port.on('hashchange',handleHashChange);
}

// Function gets triggered when a message 'hashchange' is received
// from the content script'
function handleHashChange(message) {
	console.log("hashchange event occured");
	var urlMatch = /.*mail.google.com.*compose=.*/;
	if ( message.match(urlMatch) ) {
		console.log('Activating Button');
		enableForThisTab(button.state("tab"));
	}
	else{
		console.log('Deactivating Button');
		disableForThisTab(button.state("tab"));
	}
}

// Disables the Action Button for the current tab
function disableForThisTab(state) {
  button.state("window", {
		disabled: true
	});
}

// Enables the Action Button for the current tab
function enableForThisTab(state) {
  button.state("tab", {
		disabled: false
	});
}
