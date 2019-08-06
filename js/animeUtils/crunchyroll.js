const cGetTitle = (url) => {
    const parser = document.createElement('a')
    parser.href = url
    const parsed = parser.pathname.split('/')
    return parsed[1].split('-').join(' ')
}

const cGetEp = (url) => {
    const parser = document.createElement('a')
    parser.href = url
    const parsed = parser.pathname.split('/')
    const ep_url = parsed[2]
    if (ep_url) {
        const ep_split = ep_url.split('-')
        if (ep_split[0] == "episode") {
            const ep = parseInt(ep_split[1], 10)
            return ep
        }
    }
    return false
}

const cGetUrl = (title) => {
    const new_title = title.split(' ').join('-')
    return "https://www.crunchyroll.com/" + new_title;
}