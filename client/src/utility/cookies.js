import Cookies from "js-cookie";

export function setCookie(name, value) {
    Cookies.set(name, value, { expires: 10 });
}


export function getCookie(name) {
    return Cookies.get(name) || [];
}
