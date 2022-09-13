import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import instance from "../../shared/Requests";

const initialState = {
    isLoading: false,
    error: null,
    cart: null,
}

export const getCartThunk = createAsyncThunk("cart/getCart", async (data, thunk) => {
    try {
        const {data} = await instance.get("/cart");
        return thunk.fulfillWithValue(data);
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCartThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.cart = null;
        }).addCase(getCartThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cart = action.payload;
        }).addCase(getCartThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default cartSlice.reducer;