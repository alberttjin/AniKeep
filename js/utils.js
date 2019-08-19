const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

const setCookie = (name, value) => {
    document.cookie = name + "=" + value
}

const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const clearCache = () => {
    chrome.storage.local.set({anime: []});
}