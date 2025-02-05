import { createSlice } from "@reduxjs/toolkit";

const roleSlice = createSlice({
  name: "role-slice",
  initialState: { roles: [], loading: true },
  reducers: {
    setRoles(state, action) {
      const roles = action.payload;
      state.roles = roles;
    },
    setRoleRequestLoading(state, action) {
      const { loading } = action.payload;
      return {
        ...state,
        loading: loading,
      };
    },
    setRoleRequestCompleted(state, action) {
      const { loading } = action.payload;
      return {
        ...state,
        loading: loading,
      };
    },
  },
});
export const roleSliceActions = roleSlice.actions;
export const roleSliceActionsTypes = roleSlice.name;
export const roleSliceReducer = roleSlice.reducer;
