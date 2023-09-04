import { createReducer } from "@reduxjs/toolkit";
import {user_photo} from '../actions/userActions.js';

const initialState = {
    photo: 'https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png'
}

const userReducer = createReducer(initialState, 
    (builder) => builder
        .addCase(user_photo, (state, action)=> {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
)

export default userReducer