$(function(){
    $("#add").click(function() {
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var url = tabs[0].url;
            var title = handle_add(url);
            if (title) {
                chrome.storage.sync.get({'anime': []}, function(data) {
                    if (!data.anime.some(e => e.title === title)) {
                        var i = data.anime.length;
                        var to_append = "<div class='anime'><button class='delete' data-divider=" + i + "><i class='fa fa-minus'></i></button><p class='animeTitle' id=" + i + ">" + title + "</p></div>"
                        $('#animeList').append(to_append);
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
        handle_delete(title);
    });
})

function load_anime() {
    chrome.storage.sync.get({'anime': []}, function(data) {
        var html = "";
        data.anime.forEach(function(elem, i) {
            html += "<div class='anime'><button class='delete' data-divider=" + i + "><i class='fa fa-minus'></i></button><p class='animeTitle' id=" + i + ">" + elem.title + "</p></div>"
        })
        $("#animeList").append(html);
    });
}

