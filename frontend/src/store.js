import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './Slice/User/ApiSlice';
import authReducer from './Slice/User/AuthSlice';

//REDUX STORE SETTINGS
const store = configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      auth: authReducer, // add this line
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
  });
  
  export default store;