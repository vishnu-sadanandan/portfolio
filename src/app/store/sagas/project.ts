import { call, put, takeEvery } from "redux-saga/effects";
import { projectSliceActions, projectSliceActionsTypes } from "../reducers/project";
import { Project } from "@/app/api/response/types";

const apiUrl = "/api/project";
async function fetchProjects() {
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

function* setProjects():Generator<unknown, void, Project[]> {
  try {
    const data = yield call(fetchProjects);
    yield put(projectSliceActions.setProjects(data));
    yield put(projectSliceActions.setProjectRequestCompleted({loading:false}));
  } catch (error) {
    throw new Error(`"Something went wrong!" ${error}`);
  }
}

export function* watchProjectFetch() {
  yield takeEvery(
    `${projectSliceActionsTypes}/setProjectRequestLoading`,
    setProjects
  );
}
