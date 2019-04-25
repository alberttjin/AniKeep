function handle_add(url, ep) {
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
    } else if (url.includes("4anime")) {
        title = get_4anime_title(url);
        url = get_4anime_url(title);
    } else {
        return false;
    }
    var to_add = {
        'title': title,
        'url': url,
        'ep': ep,
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

function update_ep(title, ep) {
    chrome.storage.sync.get({'anime': []}, function(data) {
        var to_edit = null;
        var i;
        for (i = 0; i < data.anime.length; i++) {
            var elem = data.anime[i];
            if (elem.title === title) {
                to_edit = elem;
            }
        }
        var new_anime = data.anime.filter(function (elem) {
            return elem.title != title;
        });
        if (to_edit){
            to_edit['ep'] = ep;
            new_anime.push(to_edit);
            chrome.storage.sync.set({anime: new_anime});
        }
    });
}