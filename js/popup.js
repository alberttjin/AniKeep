$(document).ready(async() => {
    const token = getCookie("token")
    if (token) {
        loadLoginSignUp()
    } else {
        await loadAnime()
    }
});

const loadLoginSignUp = () => {
    const html = `
        <div class="tab">
            <button class="tablinks active" id="signuptab">Signup</button>
            <button class="tablinks" id="logintab">Login</button>
        </div>

        <div id="signup" class="tabcontent">
            <h3>Signup</h3>
                <input type="text" placeholder="Email" name="email" id="email" required>
                <input type="text" placeholder="Username" name="username" id="username" required>
                <input type="password" placeholder="Password" name="password" id="password" required>
                <button id="signupbutton">SignUp!</button>
        </div>

        <div id="login" class="tabcontent">
            <h3>Login</h3>
                <input type="text" placeholder="Email" name="email" id="lemail" required>
                <input type="password" placeholder="Password" name="password" id="lpassword" required>
                <button id="loginbutton">Login!</button>
        </div>
    `
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
    $("#add").click(addAnimeConnector)
}
// $(function() {
//     $("#animeList").on('click', '#add', function() {
//         chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
//             var url = tabs[0].url
//             var parsedInfo = parseAndAdd(url)
//             var title = parsedInfo.title
//             var ep = parsedInfo.ep
//             var toAppend = getListingHTML(getAnimes().length, title, ep, false)
//             $(toAppend).insertBefore("#addWrapper")
//         })
//     });
//     load_anime();
//     $("#animeList").on('click', '.delete', function() {
//         var id = $(this).attr('data-divider')
//         var title = $('#' + id).text()
//         title = title === "false" ? false : title
//         deleteAnime(title)
//         var parent = $(this).parent("div");
//         parent.remove();
//     });
//     $("#animeList").on('click', '.go', function() {
//         var id = $(this).attr('data-divider');
//         var title = $('#' + id).text();
//         var anime = getAnime(title)
//         chrome.tabs.create({url: anime.url});
//     });
// })

// function load_anime() {
//     var animes = getAnimes()
//     var html = ""
//     animes.forEach(function(elem) {
//         var toAdd = getListingHTML(elem.title, elem.ep)
//         html += toAdd
//     });
//     html += "<div id='addWrapper'><button id='add'><p id='addText'>Add</p></button></div>";
//     $("#animeList").append(html);
// }

