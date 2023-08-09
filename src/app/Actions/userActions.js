// import axios from "axios";
// import { server } from "../store";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const loadUser = createAsyncThunk("loadUser", async (_) => {
//     try {
//         const response = await axios.get(`${server}/me`, {
//             withCredentials: true,
//         });
//         return response.data.user;
//     } catch (error) {
//         throw error.response.data.message;
//     }
// });


// export const register = createAsyncThunk("register", async (formdata) => {

//     try {
//         const response = await axios.post(`${server}/register`, formdata, {
//             headers: {
//                 "Content-type": "multipart/form-data",
//             },
//             withCredentials: true,
//         });
//         return response.data;
//     } catch (error) {
//         throw error.response.data.message;

//     }
// })

import { server } from "../store";
import axios from "axios";


export const loadUser = () => async dispatch => {
    try {
        dispatch({ type: 'loadUserRequest' });

        const { data } = await axios.get(
            `${server}/me`,
            {
                withCredentials: true,
            }
        );
        dispatch({ type: 'loadUserSuccess', payload: data.user });
    } catch (error) {
        dispatch({ type: 'loadUserFail', payload: error.response.data.message });
    }
};

export const register = formdata => async dispatch => {
    try {
        dispatch({ type: 'registerRequest' });

        const { data } = await axios.post(
            `${server}/register`, formdata, {
            headers: {
                'Content-type': 'multipart/form-data',
            },
            withCredentials: true,
        },

        );
        dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'registerFail', payload: error.response.data.message });
    }
};


export const login = (username, password) => async dispatch => {
    try {
        dispatch({ type: 'loginRequest' });

        const { data } = await axios.post(
            `${server}/login`,
            { username, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        }
        );

        dispatch({ type: 'loginSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'loginFail', payload: error.response.data.message });
    }
}


export const logout = () => async dispatch => {
    try {
        dispatch({ type: 'logoutRequest' });

        const { data } = await axios.get(`${server}/logout`, {
            withCredentials: true,
        });
        dispatch({ type: 'logoutSuccess', payload: data.message });
    } catch (error) {
        dispatch({ type: 'logoutFail', payload: error.response.data.message });
    }
};



