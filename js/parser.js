function parseAndUpdate(url) {
    var title
    var ep
    if (url.includes("kissanime")) {
        title = kGetTitle(url)
        ep = kGetEp(url)
        updateAnime(title, ep)
    } else if (url.includes("4anime")) {

    } else if (url.includes("crunchyroll")) {

    } else {
        return false
    }
}

function parseAndAdd(url) {
    var title
    var ep
    var listingUrl
    if (url.includes("kissanime")) {
        title = kGetTitle(url)
        ep = kGetEp(url)
        listingUrl = kGetUrl(url)
        addAnime(title, ep, listingUrl)
        return {title, ep, url: listingUrl}
    } else if (url.includes("4anime")) {

    } else if (url.includes("crunchyroll")) {

    } else {
        return false
    }
}