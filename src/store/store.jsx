import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clientSlice from "../features/clients/clientSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import houseSlice from "../features/houseSlice";
import ownersSlice from "../features/owners/ownersSlice";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    client: clientSlice,
    house: houseSlice,
    owner: ownersSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk],
});

export const persistor = persistStore(store);
