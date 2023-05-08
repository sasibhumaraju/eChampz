import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../thunks/Auth";
import { auth } from "../firebase-config";


const UsersSlice = createSlice({
    name: "user",
    initialState : {
        data: {},
        isLoading: false,
        error: null,
    },
    reducers : {},
    extraReducers(builder) {
        builder.addCase(LoginUser.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state,action) => {
            state.isLoading = false;
            console.log(auth)
            state.data = action.payload;
        });
        builder.addCase(LoginUser.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }

});

export const UsersReducer = UsersSlice.reducer;
