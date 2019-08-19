const register = async(email, username, password) => {
    const response = await fetch('https://sleepy-falls-78684.herokuapp.com/users/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            username,
            password,
        }),
    })
    if (response.ok) {
        const json = await response.json();
        const token = json["token"];
        return token;
      } else {
        return response.ok;
    }
}

const login = async(email, password) => {
    const response = await fetch('https://sleepy-falls-78684.herokuapp.com/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
    if (response.ok) {
        const json = await response.json();
        const token = json["token"];
        return token;
    } else {
        return response.ok;
    }
}

const signout = async(token) => {
    const response = await fetch('https://sleepy-falls-78684.herokuapp.com/users/me/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
    return response.ok;
}

const getAnimes = async(token) => {
    const response = await fetch('https://sleepy-falls-78684.herokuapp.com/animes', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
    if (response.ok) {
        const json = await response.json();
        return json;
    } else {
        return response.ok;
    }
}

const getAnime = async(token, title) => {
    const response = await fetch('https://sleepy-falls-78684.herokuapp.com/anime/' + title, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    })
    if (response.ok) {
        const json = await response.json();
        return json;
    } else {
        return response.ok;
    }
}

const addAnime = async(token, title, ep, url) => {
    const response = await fetch('https://sleepy-falls-78684.herokuapp.com/anime/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            title,
            ep,
            url,
        })
    })
    if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        return response.ok;
    }
}

const updateAnime = async(token, title, ep) => {
    const response = await fetch('https://sleepy-falls-78684.herokuapp.com/anime/update', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            title,
            ep,
        })
    })
    if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        return response.ok;
    }
}

const deleteAnime = async(token, title) => {
    const response = await fetch('https://sleepy-falls-78684.herokuapp.com/anime/delete', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
            title,
        })
    })
    if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        return response.ok;
    }
}