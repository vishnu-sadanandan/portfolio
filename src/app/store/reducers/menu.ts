import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu-slice",
  initialState: { menus: [], loading: true },
  reducers: {
    setMenus(state, action) {
      const menus = action.payload;
      state.menus = menus
    },
    setMenuRequestLoading(state,action) {
      const {loading} = action.payload;
      return {
        ...state,
        loading: loading
      };
    },
    setMenuRequestCompleted(state,action) {
      const {loading} = action.payload;
      return {
        ...state,
        loading: loading
      };
    }
  }
})
export const menuSliceActions = menuSlice.actions;
export const menuSliceActionsTypes = menuSlice.name;
export const menuSliceReducer = menuSlice.reducer;