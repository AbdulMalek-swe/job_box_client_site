 
import { auth } from "../../firebase/firebase.config";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { signInWithEmailAndPassword, createUserWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup} = require ( "firebase/auth");
const provider = new GoogleAuthProvider();
const initialState = {
    email:"",
    role:"",
    isLoading:true,
    isError:false,
    error:""
}
export const createUser = createAsyncThunk("auth/createUser",async({email,password})=>{
    const data = await createUserWithEmailAndPassword(auth , email, password)
    return data.user.email;
})
export const loginUser = createAsyncThunk("auth/loginUser",async({email,password})=>{
    const data = await signInWithEmailAndPassword(auth , email, password)
    return data.user.email;
})
export const googleLogin = createAsyncThunk("auth/google",async()=>{
    const data = await signInWithPopup(auth, provider);
    console.log(data?.user)
    return data?.user?.email;
})
const authSlice = createSlice({
    name:"auth",
    initialState,   
    reducers:{
   logout:(state)=>{
    state.email=""
   },
   setUser:(state,{payload})=>{
       state.email=payload;
       state.isLoading=false;
   },
   toggleLoading:(state)=>{
    state.isLoading=false;
   }
    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        })
        builder.addCase(createUser.fulfilled,(state,{payload})=>{
            state.email=payload;
            state.isLoading = false;
            state.isError = false;
            state.error = ""
        })
        builder.addCase(createUser.rejected,(state,action)=>{
            state.email="";
            state.isLoading = false;
            state.isError = false;
            state.error = action.error.message
        })   
        // login user code 
        builder.addCase(loginUser.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        })
        builder.addCase(loginUser.fulfilled,(state,{payload})=>{
            state.email=payload;
            state.isLoading = false;
            state.isError = false;
            state.error = ""
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.email="";
            state.isLoading = false;
            state.isError = false;
            state.error = action.error.message
        })
        // googleLogin system
        builder.addCase(googleLogin.pending,(state,action)=>{
            state.email="";
            state.isLoading = false;
            state.isError = false;
           
        }) 
        builder.addCase(googleLogin.fulfilled,(state,{payload})=>{
            state.email=payload;
            state.isLoading = false;
            state.isError = false;
            
        }) 
        builder.addCase(googleLogin.rejected,(state,action)=>{
            state.email="";
            state.isLoading = false;
            state.isError = false;
            state.error = action.error.message
        })
    }
})
export const { logout,setUser ,toggleLoading} = authSlice.actions;
export default authSlice.reducer