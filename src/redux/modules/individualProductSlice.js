import {createSlice} from "@reduxjs/toolkit";
import instance from "../../shared/Requests";
import {createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    product: null,
}

export const getProductThunk = createAsyncThunk("product/getIndividualProduct", async (productName, thunk) => {
    try {
        const {data} = await instance.get("/product/" + productName);
        return thunk.fulfillWithValue(data);
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
});

const individualProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProductThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.data = null;
        }).addCase(getProductThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getProductThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default individualProductSlice.reducer;