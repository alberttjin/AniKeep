function handle_add(url) {
    var title;
    var url;
    if (url.includes("kissanime")) {
        title = get_kissanime_title(url);
        url = get_kissanime_url(url);
        if (!title) {
            //TODO: Add Error Message
        }
    } else if (url.includes("masterani")) {
        title = get_masterani_title(url);
        url = get_masterani_url(url)
    } else {
        return false;
    }
    var to_add = {
        'title': title,
        'url': url
    }
    chrome.storage.sync.get({'anime': []}, function(data) {
        if (!data.anime.some(e => e.title === title)) {
            var all_anime = data.anime.concat(to_add);
            chrome.storage.sync.set({anime: all_anime});
        }
    });
    //make post request to firebase
    return title;
}

function handle_delete(title) {
    chrome.storage.sync.get({'anime': []}, function(data) {
        var new_anime = data.anime.filter(function (elem) {
            return elem.title != title;
        })
        chrome.storage.sync.set({anime: new_anime});
    });
}