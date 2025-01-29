import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "project-slice",
  initialState: { projects: [], loading: true },
  reducers: {
    setProjects(state, action) {
      const projects = action.payload;
      state.projects = projects
    },
    setProjectRequestLoading(state,action) {
      const {loading} = action.payload;
      return {
        ...state,
        loading: loading
      };
    },
    setProjectRequestCompleted(state,action) {
      const {loading} = action.payload;
      return {
        ...state,
        loading: loading
      };
    }
  }
})
export const projectSliceActions = projectSlice.actions;
export const projectSliceActionsTypes = projectSlice.name;
export const projectSliceReducer = projectSlice.reducer;