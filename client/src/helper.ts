import { cookieModal } from './modals';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const setCookies = ({key,value}:cookieModal) => {
    cookies.set(`${key}`,value)
}

const getCookies = ({key}:cookieModal) => {
    let val = cookies.get(`${key}`)
    return val
}

const deleteCookies = ({key}:cookieModal) => {
    let val = cookies.remove(`${key}`)
    return val
}

const logoutUser = () => {
    deleteCookies({key : 'token'})
}

export {setCookies,getCookies,logoutUser}