// Import the page-mod API
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: self.data.url('fblink.js')
});