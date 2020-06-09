chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({hide: true}, function() {
    console.log("Hide image is on");
  });
  
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'web.whatsapp.com'},
      })
      ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

/*global chrome:false */
/*
chrome.browserAction.setBadgeText({text: '(ツ)'});
chrome.browserAction.setBadgeBackgroundColor({color: '#eae'});

chrome.browserAction.onClicked.addListener(function(aTab) {
  chrome.tabs.create({'url': 'http://chilloutandwatchsomecatgifs.com/', 'active': true});
});*/