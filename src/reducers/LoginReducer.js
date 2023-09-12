
const initialState = {
    username: '',
    password: '',
    loggedIn: false
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_FAIL': {
            return {
                ...state,
                username: '',
                password: '',
                loggedIn: false
            };
        }
        case 'LOGOUT': {
            return {
                ...state,
                username: '',
                password: '',
                loggedIn: false
            };
        }
        case 'LOGIN_SUCCESS': {
            const loggedIn = true;
            return { ...state, loggedIn };
        }
        case 'INPUT_USERNAME': {
            return {
                ...state,
                username: action.payload
            };
        }
        case 'INPUT_PASSWORD': {
            return {
                ...state,
                password: action.payload
            };
        }
        default:
            return state;
    }
}

export default LoginReducer;