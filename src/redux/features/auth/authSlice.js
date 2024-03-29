
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase/firebase.config";




const initialState = {
    email: "",
    role: "",
    isLoading: true,
    isError: false,
    error: "",
};


export const createUser = createAsyncThunk('auth/createUser', async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data);
    return data.user.email;
});




export const getUser = createAsyncThunk('auth/getUser', async (email) => {
    const res = await fetch(`http://localhost:5000/api/v1/user/${email}`);
    const data = await res.json();
    if (data.status) {
        return data;
    }
    return email;
});


export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
});

export const googleSignIn = createAsyncThunk("auth/googleSignIn", async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);
    return data.user.email;
});




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.email = "";
        },
        setUser: (state, { payload }) => {
            state.email = payload;
            state.isLoading = false
        },
        toggleLoading: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            }).addCase(createUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.email = payload;
                state.isError = false;
                state.error = "";
            }).addCase(createUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = "";
                state.isError = true;
                state.error = action.error.message;

            })
            .addCase(loginUser.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.email = payload;
                state.isError = false;
                state.error = '';
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(googleSignIn.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(googleSignIn.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.email = payload;
                state.isError = false;
                state.error = '';
            })
            .addCase(googleSignIn.rejected, (state, action) => {
                state.isLoading = false;
                state.email = '';
                state.isError = true;
                state.error = action.error.message;
            })
            .addCase(getUser.pending, state => {
                state.isLoading = true;
                state.isError = false;
                state.error = "";
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                if (payload.status) {
                    state.user = payload.data
                }
                else {
                    state.user.email = payload;
                }
                state.isError = false;
                state.error = '';
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user.email = '';
                state.isError = true;
                state.error = action.error.message
            })
    }
})


export const { setUser, logout, toggleLoading } = authSlice.actions;
// selectors
export const selectUser = state => state.user.user

export default authSlice.reducer