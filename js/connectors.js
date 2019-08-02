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

const getAnimesConnector = async(token) => {
    const animes = await getAnimes(token)
    console.log(animes)
}

const addAnimeConnector = async(token, title, ep, url) => {
    const anime = await addAnime(token, title, ep, url)
    if (anime) {
        console.log("sup")
    } else {
        alert("Something went wrong. Could not add anime :(")
    }
}