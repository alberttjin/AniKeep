chrome.runtime.onInstalled.addListener(function() {
    //chrome.storage.sync.set({anime: []});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var url = changeInfo.url
    if (url) {
        parseAndUpdate(url)
    }
});