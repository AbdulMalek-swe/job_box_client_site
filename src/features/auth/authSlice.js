import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../firebase/firebase.config"
const provider = new GoogleAuthProvider();
const initialState = {
    email: "",
    role: "",
    isLoading: true,
    isError: false,
    error: ""
}
export const googleLogin = createAsyncThunk("auth/google", async () => {
    const res = await signInWithPopup(auth, provider)
    return res?.user?.email;
    return;
})
export const signUp = createAsyncThunk("auth/signup", async ({ email, password }) => {
    const res = await fetch('http://localhost:5000/sign', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    const data = await res.json();
    return data;
})
export const signIn = createAsyncThunk("auth/login", async ({ email, password }) => {
    const res = await fetch('http://localhost:5000/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),

    })
    const data =await res.json();
    console.log(data);
     localStorage.setItem("token",data.token)
    return data;
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.email = payload;
            state.isLoading = false;
        },
        toggleLoading: (state) => {
            state.isLoading = false;
        },
        logout: (state) => {
            state.email = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(googleLogin.pending, (state, actions) => {
            state.isLoading = false
        })
        builder.addCase(googleLogin.fulfilled, (state, { payload }) => {
            state.email = payload;
        })
        builder.addCase(googleLogin.rejected, (state, actions) => {

        })
        builder.addCase(signUp.pending, (state, actions) => {
            state.isLoading = false
        })
        builder.addCase(signUp.fulfilled, (state, { payload }) => {
            state.email = payload;
        })
        builder.addCase(signUp.rejected, (state, actions) => {

        })
        builder.addCase(signIn.pending, (state, actions) => {
            state.isLoading = false
        })
        builder.addCase(signIn.fulfilled, (state, { payload }) => {
            state.email = payload;
        })
        builder.addCase(signIn.rejected, (state, actions) => {

        })
    }
})
export const { toggleLoading, setUser, logout } = authSlice.actions;
export default authSlice.reducer;