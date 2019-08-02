function kGetTitle(url) {
    var parser = document.createElement('a')
    parser.href = url
    var parsed = parser.pathname.split('/')
    if (parsed[1] != "Anime") {
        alert("Sorry, you cannot add an anime from this page")
        return
    }
    return parsed[2].split('-').join(' ')
}

function kGetEp(url) {
    var parser = document.createElement('a')
    parser.href = url
    var parsed = parser.pathname.split('/')
    var ep_url = parsed[3]
    if (ep_url) {
        var ep_split = ep_url.split('-')
        if (ep_split[0] == "Episode") {
            var ep = parseInt(ep_split[1], 10)
            return ep
        }
    }
    return 0
}

function kGetUrl(url) {
    var parser = document.createElement('a');
    parser.href = url;
    var parsed = parser.pathname.split('/');
    return "https://kissanime.ru/Anime/" + parsed[2];
}