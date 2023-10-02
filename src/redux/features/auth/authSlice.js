
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase/firebase.config";




const initialState = {
    user: {
        email: "",
        role: "",

    },
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
    const res = await fetch(`http://localhost:5000/user/${email}`);
    const data = await res.json();
    if (data.status) {
        return data
    }
    return email
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




export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoading = false
        },
        toggleLoading: (state) => {
            state.isLoading = false;
        },
        logout: state => {
            state.user = null
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


export const { setUser, logout } = authSlice.actions;
// selectors
export const selectUser = state => state.user.user

export default authSlice.reducer