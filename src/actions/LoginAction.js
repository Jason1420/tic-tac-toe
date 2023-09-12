
/*-----------Handle login-----------*/
export const login = () => {

    return {
        type: 'LOGIN_SUCCESS',
    }
}
export const logout = () => {

    return {
        type: 'LOGOUT',
    }
}
export const loginFail = () => {

    return {
        type: 'LOGIN_FAIL',
    }
}
export const usernameInput = (username) => {
    return {
        type: 'INPUT_USERNAME',
        payload: username
    }
}
export const passwordInput = (password) => {
    return {
        type: 'INPUT_PASSWORD',
        payload: password
    }
}