import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore } from "redux-persist";

//import reducers
import ImagesReducer from "./reducers/Images.reducer";

const store = configureStore({
  reducer: {
    imagesReducer: ImagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setupListeners(store.dispatch);

const persister = persistStore(store);

export { persister, store };
