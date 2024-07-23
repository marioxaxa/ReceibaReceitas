document.querySelector("#deslogar").addEventListener("click", () => {

    const name = 'userid'
    const path = '/'

    document.cookie =
        name +
        "=" +
        "; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
        (path ? "; path=" + path : "")
});
