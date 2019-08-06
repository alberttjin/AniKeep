const gGetTitle = (url) => {
    const parser = document.createElement('a')
    parser.href = url;
    const parsed = parser.pathname.split('/')
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

const gGetEp = (url) => {
    const parser = document.createElement('a');
    parser.href = url;
    const parsed = parser.pathname.split('/');
    const path = parsed[1].split('-');
    if (path.includes("episode")) {
        const ep = parseInt(path[path.length - 1], 10);
        return ep;
    }
    return false
}

const gGetUrl = (title) => {
    const new_title = title.split(' ').join('-')
    return "https://www1.animego.to/category/" + new_title;
}