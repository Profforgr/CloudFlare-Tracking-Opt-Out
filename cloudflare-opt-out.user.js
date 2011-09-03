// ==UserScript==
// @name          CloudFlare Tracking Opt-Out
// @namespace     savetheinternet
// @description	  Removes CloudFlare's tracking cookie on all sites powered by CloudFlare.
// @copyright     2011 Savetheinternet <savetheinternet@omegasdg.com>
// @license       MIT; http://en.wikipedia.org/wiki/Mit_license
// @include       *
// ==/UserScript==

// delete cookie
document.cookie = '__cfduid=delete;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.' + document.location.host;

