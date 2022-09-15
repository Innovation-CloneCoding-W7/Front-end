import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import instance from "../../shared/Requests";

const initialState = {
    isLoading: false,
    error: null,
    cart: [],
}

export const getCartThunk = createAsyncThunk("cart/getCart", async (data, thunk) => {
    try {
        const {data} = await instance.get("/cart");
        if (!data.error) {
            return thunk.fulfillWithValue(data.data);
        }
        return thunk.rejectWithValue(data.error);
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
})

export const addToCartThunk = createAsyncThunk("cart/addToCart", async (item, thunk) => {
    try {
        return thunk.fulfillWithValue(item);
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

        builder.addCase(addToCartThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.cart = null;
        }).addCase(addToCartThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            const localCart = localStorage.getItem("cart");
            if (!localCart) {
                const newCart = [
                    action.payload
                ];
                localStorage.setItem("cart", JSON.stringify(newCart));
            } else {
                const previousCart = JSON.parse(localCart);
                const newCart = [
                    ...previousCart, action.payload
                ]
                localStorage.setItem("cart", JSON.stringify(newCart));
            }
        }).addCase(addToCartThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default cartSlice.reducer;