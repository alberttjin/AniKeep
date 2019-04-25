chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({anime: []});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    var url = changeInfo.url;
    if (url) {
        var title = get_4anime_title(url);
        var ep = get_ep(url);
        if (ep) {
            update_ep(title, ep);
        }
    }
});