function capitalize_title(title) {
    return title.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
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

function get_masterani_url(url) {
    var parser = document.createElement('a');
    parser.href = url;
    var parsed = parser.pathname.split('/');
    return "https://www.masterani.me/anime/info/" + parsed[3];
}