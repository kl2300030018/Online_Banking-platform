import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    addNotification: (state, action) => {
      state.push({ id: Date.now(), message: action.payload });
    },
    removeNotification: (state, action) => {
      return state.filter((notification) => notification.id !== action.payload);
    },
  },
});
export const { addNotification, removeNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./redux/notificationSlice";

const store = configureStore({
  reducer: {
    notifications: notificationReducer,
  },
});

export default store;