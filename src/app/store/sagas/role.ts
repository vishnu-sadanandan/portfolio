import { call, put, takeEvery } from "redux-saga/effects";
import { roleSliceActions, roleSliceActionsTypes } from "../reducers/role";
import { Role } from "@/app/api/response/types";

const apiUrl = "/api/role";
async function fetchRoles() {
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

function* setRoles(): Generator<unknown, void, Role[]> {
  try {
    const data = yield call(fetchRoles);
    yield put(roleSliceActions.setRoles(data));
    yield put(roleSliceActions.setRoleRequestCompleted({ loading: false }));
  } catch (error) {
    throw new Error(`"Something went wrong!" ${error}`);
  }
}

export function* watchRoleFetch() {
  yield takeEvery(`${roleSliceActionsTypes}/setRoleRequestLoading`, setRoles);
}
