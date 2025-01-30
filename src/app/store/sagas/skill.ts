import { call, put, takeEvery } from "redux-saga/effects";
import { skillSliceActions, skillSliceActionsTypes } from "../reducers/skill";
import { Skill } from "@/app/api/response/types";

const apiUrl = "/api/skill";
async function fetchSkills() {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`"Something went wrong!" ${error}`);
  }
}

function* setSkills():Generator<unknown, void, Skill[]> {
  try {
    const data = yield call(fetchSkills);
    yield put(skillSliceActions.setSkills(data));
    yield put(skillSliceActions.setSkillRequestCompleted({loading:false}));
  } catch (error) {
    throw new Error(`"Something went wrong!" ${error}`);
  }
}

export function* watchSkillFetch() {
  yield takeEvery(
    `${skillSliceActionsTypes}/setSkillRequestLoading`,
    setSkills
  );
}
