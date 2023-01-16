const getCookie = (name) => {
    const cookie = document.cookie;
    const allCookie = cookie.split(';');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        // console.log('color_mode')
        const cookieValue = findCookie.split('=');
        return cookieValue[1];
    }
}