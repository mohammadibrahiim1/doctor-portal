import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const auth = getAuth(app);
const initialState = {
    user: {
        email: "",
        role: "",

    }
    ,
    isLoading: true,
    isError: false,
    error: '',
}


export const createUser = createAsyncThunk('auth/createUser', async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data);
    return data.email;
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
            state.isLoading = false
        },
        toggleLoading: state => {
            state.isLoading = false;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createUser.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            }).addCase(createUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.user.email = payload;
                state.isError = false;
                state.error = "";
            }).addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user.email = "";
                state.isError = false;
                state.error = action.error.message;

            })
    }
})


export const { setUser } = authSlice.actions;

export default authSlice.reducer