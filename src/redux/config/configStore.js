import {configureStore} from "@reduxjs/toolkit";
import productSliceReducer from "../modules/productSlice";
import individualProductSliceReducer from "../modules/individualProductSlice"

const store = configureStore({
    reducer: {
        productSliceReducer,
        individualProductSliceReducer
    },
});

export default store;
