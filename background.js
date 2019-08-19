chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({anime: []});
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    var newUrl = changeInfo.url
    if (newUrl) {
        const token = getCookie("token")
        const urlData = parse(newUrl)
        if (urlData) {
            const { title, ep } = urlData
            await updateAnime(token, title, ep)
        }
    }
});