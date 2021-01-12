import types from "./types";

const INITIAL_LOGIN = {
    user: '', //null/undefined/{} ?
    isLogged: false,
}

const loginLogoutReducer = (state = INITIAL_LOGIN, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                user: action.user, isLogged: true
            }
        case types.LOGOUT:
            return {
                user: {
                    "likedUsers": [],
                    "dislikedUsers": [],
                    "likedBy": [],
                    "_id": "",
                    "name": "",
                    "image": "",
                    "age": null,
                    "email": "",
                    "password": "",
                    "createdAt": "",
                    "updatedAt": "",
                    "__v": 0
                },
                isLogged: false
            }
        default:
            return state
    }
}

export default loginLogoutReducer;
