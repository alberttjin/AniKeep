const parse = (url) => {
    let title
    let ep
    let listingUrl
    if (url.includes("kissanime")) {
        title = kGetTitle(url)
        ep = kGetEp(url)
        listingUrl = kGetUrl(url)
        if (!(title && ep && listingUrl)) {
            return false
        }
        return {title, ep, url: listingUrl}
    } else if (url.includes("4anime")) {
        title = fGetTitle(url)
        ep = fGetEp(url)
        listingUrl = fGetUrl(title)
        if (!(title && ep && listingUrl)) {
            return false
        }
        return {title, ep, url: listingUrl}
    } else if (url.includes("crunchyroll")) {
        title = cGetTitle(url)
        ep = cGetEp(url)
        listingUrl = cGetUrl(title)
        if (!(title && ep && listingUrl)) {
            return false
        }
        return {title, ep, url: listingUrl}
    } else if (url.includes("animego")) {
        title = gGetTitle(url)
        ep = gGetEp(url)
        listingUrl = gGetUrl(title)
        if (!(title && ep && listingUrl)) {
            return false
        }
        return {title, ep, url: listingUrl}
    } else {
        return false
    }
}
