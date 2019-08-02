const addHeader = () => {
    const html = "<div id='header'><p id='title'>AniKeep</p></div>"
    $("body").append(html)
}

const addAddButton = () => {
    const html = "<div id='addWrapper'><button id='add'><p id='addText'>Add</p></button></div>"
    $("body").append(html)
}

const getListingHTML = (id, title, ep, toAdd) => {
    var add = toAdd ? "<p class='new'>New!</p>" : ""
    var toAppend = "<div class='anime'><button class='delete' data-divider=" + 
    id +
    "><i class='fa fa-times'></i></button><button class='go' data-divider=" +
    id +
    "><p class='animeTitle' id=" +
    id +
    ">" +
    title +
    "</p>" +
    "<p class='ep'> (ep. " +
    ep +
    ")</p>" +
    add +
    "</button></div>";

    return toAppend;
}