function capitalize_title(title) {
    return title.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function check_new(title, ep) {
    var ep = ep + 1;
    var title = title.split(' ').join('-');
    var proxy_url = "https://cors-anywhere.herokuapp.com/";
    var url = "https://4anime.to/" + title + '-' + 'episode' + '-' + '0' + ep;
    var http = new XMLHttpRequest();
    http.open('HEAD', proxy_url + url, false);
    http.send();
    if (http.status != 404) {
        return true;
    } else {
        url = "https://4anime.to/" + title + '-' + 'episode' + '-' + ep;
        http = new XMLHttpRequest();
        http.open('HEAD', proxy_url + url, false);
        http.send();
        return http.status != 404
    }
}

function get_kissanime_title(url) {
    var parser = document.createElement('a');
    parser.href = url;
    var parsed = parser.pathname.split('/');
    if (parsed[1] != "Anime") {
        return false;
    }
    return parsed[2].split('-').join(' ');
}

function get_4anime_title(url) {
    var parser = document.createElement('a');
    parser.href = url;
    var parsed = parser.pathname.split('/');
    if (parsed[2]) {
        return parsed[2].split('-').join(' ');
    } else {
        var to_parse = parsed[1].split('-')
        var result = [];
        var i;
        for (i = 0; i < to_parse.length; i++) {
            var elem = to_parse[i];
            if (elem == "episode") {
                break;
            } else {
                result.push(elem);
            }
        }
        return result.join(' ')
    }
}

function get_ep(url) {
    if (url.includes("kissanime")) {
        var parser = document.createElement('a');
        parser.href = url;
        var parsed = parser.pathname.split('/');
        var ep_url = parsed[3];
        if (ep_url) {
            var ep_split = ep_url.split('-');
            if (ep_split[0] == "Episode") {
                var ep = parseInt(ep_split[1], 10)
                return ep;
            }
        }
    } else if (url.includes("4anime")) {
        var parser = document.createElement('a');
        parser.href = url;
        var parsed = parser.pathname.split('/');
        var path = parsed[1].split('-');
        if (!parsed[2] && path.includes("episode")) {
            var ep = parseInt(path[path.length - 1], 10);
            return ep;
        }
    }
    return false;
}

function get_masterani_title(url) {
    var parser = document.createElement('a');
    parser.href = url;
    var parsed = parser.pathname.split('/');
    var title = parsed[3].split('-');
    title = title.slice(1, title.length).join(' ');
    return capitalize_title(title);
}

function get_kissanime_url(url) {
    var parser = document.createElement('a');
    parser.href = url;
    var parsed = parser.pathname.split('/');
    return "https://kissanime.ru/Anime/" + parsed[2];
}

function get_4anime_url(title) {
    var new_title = title.split(' ').join('-')
    return "https://4anime.to/anime/" + new_title;
}

function get_masterani_url(url) {
    var parser = document.createElement('a');
    parser.href = url;
    var parsed = parser.pathname.split('/');
    return "https://www.masterani.me/anime/info/" + parsed[3];
}

function get_url_from_title(title) {
    var url;
    chrome.storage.sync.get({'anime': []}, function(data) {
        var anime = data.anime.find(o => o.name === title);
        url = anime.url;
    });
    return url;
}