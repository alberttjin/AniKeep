const getLoginSignUpHtml = () => {
    const html = `
    <div id="container">
        <div class="tab">
            <button class="tablinks active" id="signuptab"><p class="lstext">Signup</p></button>
            <button class="tablinks" id="logintab"><p class="lstext">Login</p></button>
        </div>

        <div id="signup" class="tabcontent">
                <input type="text" placeholder="Email" name="email" id="email" required>
                <input type="text" placeholder="Username" name="username" id="username" required>
                <input type="password" placeholder="Password" name="password" id="password" required>
                <button class="submitbutton" id="signupbutton">Signup!</button>
        </div>

        <div id="login" class="tabcontent">
                <input type="text" placeholder="Email" name="email" id="lemail" required>
                <input type="password" placeholder="Password" name="password" id="lpassword" required>
                <button class="submitbutton" id="loginbutton">Login!</button>
        </div>
    </div>
    `
    return html
}
const addHeader = () => {
    const html = `
    <div id='header'>
        <div class="dummy"></div>
        <p id='title'>AniKeep</p>
        <button class="signout">
            <i class="fa fa-sign-out" style="font-size:18px"></i>
        </button>
    </div>
    `
    $("body").append(html)
}

const addAddButton = () => {
    const html = "<div id='addWrapper'><button id='add'><p id='addText'>Add</p></button></div>"
    $("body").append(html)
}

const getListingHTML = (title, ep, url, toAdd) => {
    const titleCombined = title.split(' ').join('_')
    const add = toAdd ? "<p class='new'>New!</p>" : ""
    const toAppend = `
    <div class='anime'>
        <button class='delete' title=${titleCombined}>
            <i class='fa fa-times'></i>
        </button>
        <button class='go' url=${url}>
            <p class='animeTitle'>${title}</p>
            <p class='ep'> (ep. ${ep})</p>
            ${add} 
        </button>
    </div>
    `
    return toAppend;
}