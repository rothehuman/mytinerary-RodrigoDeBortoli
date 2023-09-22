import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const user_photo = createAction('user_photo', (obj)=>{
    console.log(obj)

    return {
        payload: {
            photo: obj.photo
        }
    }
})

export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/auth/signin', obj.data);
        console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})

export const user_signup = createAsyncThunk('user_signup', async (obj) => {
    try {
        const { data } = await axios.post('http://localhost:7000/api/auth/signup', obj.data);
        console.log(data);
        localStorage.setItem('token', data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))

        return {
            user: data.response.user,
            token: data.response.token
        }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})

export const user_token = createAction('user_token', (user) => {
    return {
        payload: {
            user
        }
    }
})

export const user_signout = createAsyncThunk('user_signout', async (token) => {
    try {
        localStorage.getItem('token')
        await axios.post('http://localhost:7000/api/auth/signout', {}, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        localStorage.clear();

        return {
            user: null,
            token: null
        }
    } catch (error) {
        console.log(error);
    }
})