$(document).ready(async() => {
    const token = getCookie("token")
    if (!token) {
        loadLoginSignUp()
    } else {
        await loadAnime()
    }
});

const loadLoginSignUp = () => {
    document.body.innerHTML = '';
    const html = getLoginSignUpHtml()
    $("body").append(html)
    $("body").keyup((event) => {
        if (event.keyCode === 13) {
            $("#logintab").hasClass("active") ? $("#loginbutton").click() : $("#signupbutton").click();
        }
    });
    $("#signuptab").click(openSignUp);
    $("#logintab").click(openLogin);
    $("#signupbutton").click(signUpConnector);
    $("#loginbutton").click(loginConnector);
}

const openSignUp = () => {
    $("#login").hide()
    $("#logintab").removeClass("active")
    $("#signup").show()
    $("#signuptab").addClass("active")
}

const openLogin = () => {
    $("#signup").hide()
    $("#signuptab").removeClass("active")
    $("#login").show()
    $("#logintab").addClass("active")
}

const loadAnime = async() => {
    document.body.innerHTML = '';
    const token = getCookie("token")
    addHeader()
    addAddButton()
    await getAnimesConnector(token)
    $("#add").click(async() => {
        await addAnimeConnector(token)
    })
    $(".go").click((event) => {
        chrome.tabs.create({url: $(event.target).parent().attr("url")})
    })
    $(".delete").click(async(event) => {
        const elem = $(event.target).parent()
        const titleCombined= elem.attr("title")
        const title = titleCombined.split('_').join(' ')
        const deleteConnectorResult = await deleteAnimeConnector(token, title)
        if (deleteConnectorResult) {
            elem.parent().remove()
        }
    })
    $(".signout").click(async() => {
        const signOutResult = await signout(token)
        if (signOutResult) {
            deleteCookie("token")
            loadLoginSignUp()
        } else {
            alert("Sorry, could not log you out!")
        }
    })
}