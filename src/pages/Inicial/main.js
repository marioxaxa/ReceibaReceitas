function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const perfilButton = document.querySelector('#perfil-button');

perfilButton.addEventListener('click', () => {
    const user = getCookie('userid');

    if (user) {
        perfilButton.href = "/pages/p_perfil/p_perfil.html";
    }
});