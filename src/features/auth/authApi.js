import apiSlice from "../api/apiSlice";

const authApi = apiSlice.injectEndpoints({
 endpoints:(builder)=>({
    register:builder.mutation({
        query:(data)=>({
            method:"POST",
            url:"api/v1/user",
            body:data
        }),
    }),
 }),
})
export const {useRegisterMutation} = authApi