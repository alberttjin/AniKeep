const signUpConnector = async() => {
    const email = $('#email').val()
    const username= $('#username').val()
    const password = $('#password').val()
    const token = await register(email, username, password)
    if (token) {
        setCookie("token", token)
        loadAnime()
    } else {
        alert("Failed Signup")
    }
}

const loginConnector = async() => {
    const email = $('#lemail').val()
    const password = $('#lpassword').val()
    const token = await login(email, password)
    if (token) {
        setCookie("token", token)
        loadAnime()
    } else {
        alert("Failed Login")
    }
}

const getAnimesConnector = (token) => {
    chrome.storage.local.get({'anime': []}, async(data) => {
        let animes
        if (!data.anime.length) {
            animes = await getAnimes(token)
            chrome.storage.local.set({anime: animes})
        } else {
            animes = data.anime
        }
        let html = ""
        animes.forEach((anime) => {
            const toAdd = anime.ep < anime.maxEp
            html += getListingHTML(anime.title, anime.ep, anime.url, toAdd)
        })
        $(html).insertBefore("#addWrapper")
    });
}

const addAnimeConnector = async(token) => {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, async (tabs) => {
        const url = tabs[0].url
        const urlData = parse(url)
        if (urlData) {
            const { title, ep, url } = urlData
            const addResult = await addAnime(token, title, ep, url)
            if (addResult) {
                const toAdd = addResult.ep < addResult.maxEp
                const html = getListingHTML(title, ep, url, toAdd)
                $(html).insertBefore("#addWrapper")
            } else {
                alert("Sorry something went wrong! Was unable to add this anime")
            }
        } else {
            chrome.tabs.executeScript({
                code: swal({
                    title: "Oops!",
                    text: "This site might not be supported try kissanime, crunchyroll, gogoanime, or 4anime and make sure to click an episode!",
                    icon: "error",
                })
            })
        }
    })
}

const deleteAnimeConnector = async(token, title) => {
    const deleteResult = await deleteAnime(token, title)
    if (!deleteResult) {
        alert("Sorry, could not delete anime")
        return false
    }
    return true
}