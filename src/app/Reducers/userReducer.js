
// import axios from "axios";
// import { server } from "../store";
// import { createAsyncThunk } from "@reduxjs/toolkit";

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


// import { createSlice } from "@reduxjs/toolkit";

//   const userSlice = createSlice({
//     name: "userSlice",
//     initialState: {
//         users: [],
//         user: null,
//         loading: false,
//         error: null,
//     },

//     reducers: {},

//     extraReducers: (builder) => {
//         return builder
//             .addCase(register.pending, (state) => {
//                 state.loading = true;
//             })

//             .addCase(register.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.users.push(action.payload);
//             })
//             .addCase(register.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload
//             })
//             .addCase(loadUser.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(loadUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user = action.payload;
//             })
//             .addCase(loadUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     },
// })
// export default userSlice.reducer;

import { createReducer } from "@reduxjs/toolkit";


export const userReducer = createReducer({}, {
    loginRequest: state => {
        state.loading = true;
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    loginFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    registerRequest: state => {
        state.loading = true;
    },
    registerSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
    },
    registerFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    logoutRequest: state => {
        state.loading = true;
    },
    logoutSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.message = action.payload;
    },
    logoutFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.error = action.payload;
    },

    // searchUserRequest: state => {
    //     state.loading = true;
    // },
    // searchUserSuccess: (state, action) => {
    //     state.loading = false;
    //     state.user = action.payload;
    // },
    // searchUserFail: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    // },



    loadUserRequest: state => {
        state.loading = true;
    },
    loadUserSuccess: (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
    },
    loadUserFail: (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
    },

    clearError: state => {
        state.error = null;
    },
    clearMessage: state => {
        state.message = null;
    },
})