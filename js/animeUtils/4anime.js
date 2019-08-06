const fGetTitle = (url) => {
    const parser = document.createElement('a')
    parser.href = url;
    const parsed = parser.pathname.split('/')
    if (parsed[2]) {
        return parsed[2].split('-').join(' ')
    } else {
        const to_parse = parsed[1].split('-')
        const result = []
        let i
        for (i = 0; i < to_parse.length; i++) {
            const elem = to_parse[i]
            if (elem == "episode") {
                break;
            } else {
                result.push(elem)
            }
        }
        return result.join(' ')
    }
}

const fGetEp = (url) => {
    const parser = document.createElement('a');
    parser.href = url;
    const parsed = parser.pathname.split('/');
    const path = parsed[1].split('-');
    if (!parsed[2] && path.includes("episode")) {
        const ep = parseInt(path[path.length - 1], 10);
        return ep;
    }
    return false
}

const fGetUrl = (title) => {
    const new_title = title.split(' ').join('-')
    return "https://4anime.to/anime/" + new_title;
}