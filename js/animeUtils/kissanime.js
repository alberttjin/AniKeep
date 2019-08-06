const kGetTitle = (url) => {
    const parser = document.createElement('a')
    parser.href = url
    const parsed = parser.pathname.split('/')
    if (parsed[1] != "Anime") {
        return false
    }
    return parsed[2].split('-').join(' ')
}

const kGetEp = (url) => {
    const parser = document.createElement('a')
    parser.href = url
    const parsed = parser.pathname.split('/')
    const ep_url = parsed[3]
    if (ep_url) {
        const ep_split = ep_url.split('-')
        if (ep_split[0] == "Episode") {
            const ep = parseInt(ep_split[1], 10)
            return ep
        }
    }
    return false
}

const kGetUrl = (url) => {
    const parser = document.createElement('a');
    parser.href = url;
    const parsed = parser.pathname.split('/');
    return "https://kissanime.ru/Anime/" + parsed[2];
}