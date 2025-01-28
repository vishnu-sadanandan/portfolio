// @ts-ignore
import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content-slice",
  initialState: { contents: [], loading: true },
  reducers: {
    setContents(state, action) {
      const contents = action.payload;
      state.contents = contents
    },
    setContentRequestLoading(state,action) {
      const {loading} = action.payload;
      return {
        ...state,
        loading: loading
      };
    },
    setContentRequestCompleted(state,action) {
      const {loading} = action.payload;
      return {
        ...state,
        loading: loading
      };
    }
  }
})
export const contentSliceActions = contentSlice.actions;
export const contentSliceActionsTypes = contentSlice.name;
export const contentSliceReducer = contentSlice.reducer;