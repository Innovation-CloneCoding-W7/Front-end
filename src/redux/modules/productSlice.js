import {createSlice} from "@reduxjs/toolkit";
import instance from "../../shared/Requests";
import {createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    products: null,
}

export const getProductsThunk = createAsyncThunk("products/getProducts", async (categoryName, thunk) => {
    try {
        const {data} = await instance.get("/product/" + categoryName);
        return thunk.fulfillWithValue(data);
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProductsThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.data = null;
        }).addCase(getProductsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getProductsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;