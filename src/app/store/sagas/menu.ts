import { call, put, takeEvery } from "redux-saga/effects";
import { menuSliceActions, menuSliceActionsTypes } from "../reducers/menu";

const apiUrl = "/api/menu";
async function fetchMenus() {
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

function* setMenus():Generator<any, any, any> {
  try {
    const data = yield call(fetchMenus);
    yield put(menuSliceActions.setMenus(data));
    yield put(menuSliceActions.setMenuRequestCompleted({loading:false}));
  } catch (error) {
    // yield put(fetchDataFailure(error.message));
  }
}

export function* watchMenuFetch() {
  yield takeEvery(
    `${menuSliceActionsTypes}/setMenuRequestLoading`,
    setMenus
  );
}
