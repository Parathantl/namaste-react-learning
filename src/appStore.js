import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './utils/cartSlice';

const appStore = configureStore({
    reducer: {
        // Add reducers here
        cartReducer: cartReducer,
    }
});

export default appStore;
