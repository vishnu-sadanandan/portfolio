import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
  name: "skill-slice",
  initialState: { skills: [], loading: true },
  reducers: {
    setSkills(state, action) {
      const skills = action.payload;
      state.skills = skills
    },
    setSkillRequestLoading(state,action) {
      const {loading} = action.payload;
      return {
        ...state,
        loading: loading
      };
    },
    setSkillRequestCompleted(state,action) {
      const {loading} = action.payload;
      return {
        ...state,
        loading: loading
      };
    }
  }
})
export const skillSliceActions = skillSlice.actions;
export const skillSliceActionsTypes = skillSlice.name;
export const skillSliceReducer = skillSlice.reducer;