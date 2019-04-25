$(function(){
    $("#animeList").on('click', '#add', function() {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var url = tabs[0].url;
            var ep = get_ep(url) || 0;
            var title = handle_add(url, ep);
            if (title) {
                chrome.storage.sync.get({'anime': []}, function(data) {
                    if (!data.anime.some(e => e.title === title)) {
                        var i = data.anime.length;
                        var to_append = "<div class='anime'><button class='delete' data-divider=" + 
                        i +
                        "><i class='fa fa-times'></i></button><button class='go' data-divider=" +
                        i +
                        "><p class='animeTitle' id=" +
                        i +
                        ">" +
                        title +
                        "</p>" +
                        "<p class='ep'> (ep. " +
                        ep +
                        ")</p>" +
                        "</button></div>";
                        $(to_append).insertBefore("#addWrapper");
                    }
                });
            } else {
                //TODO: add other error handling
                alert("Page not recognized. Try kissanime.ru or masterani.me")
            }
        });
    });
    load_anime();
    $("#animeList").on('click', '.delete', function() {
        var id = $(this).attr('data-divider');
        var title = $('#' + id).text();
        title = title === "false" ? false : title
        handle_delete(title);
        var parent = $(this).parent("div");
        parent.remove();
    });
    $("#animeList").on('click', '.go', function() {
        var id = $(this).attr('data-divider');
        var title = $('#' + id).text();
        chrome.storage.sync.get({'anime': []}, function(data) {
            var url = data.anime.find(o => o.title === title).url;
            chrome.tabs.create({url: url});
        })
    });
})

function load_anime() {
    chrome.storage.sync.get({'anime': []}, function(data) {
        var html = "";
        data.anime.forEach(function(elem, i) {
            var to_add = elem.new ? "<p class='new'>New!</p>" : ""
            html += "<div class='anime'><button class='delete' data-divider=" + 
            i +
            "><i class='fa fa-times'></i></button><button class='go' data-divider=" +
            i +
            "><p class='animeTitle' id=" +
            i +
            ">" +
            elem.title +
            "</p>" +
            "<p class='ep'> (ep. " +
            elem.ep +
            ")</p>" +
            to_add +
            "</button></div>";
        });
        html += "<div id='addWrapper'><button id='add'><p id='addText'>Add</p></button></div>";
        $("#animeList").append(html);
    });
}

