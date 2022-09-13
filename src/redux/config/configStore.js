import {configureStore} from "@reduxjs/toolkit";
import productSliceReducer from "../modules/productSlice";
import individualProductSliceReducer from "../modules/individualProductSlice"
import cartSliceReducer from "../modules/cartSlice";

const store = configureStore({
    reducer: {
        productSliceReducer,
        individualProductSliceReducer,
        cartSliceReducer
    },
});

export default store;
