import { call, put, takeEvery } from "redux-saga/effects";
import { contentSliceActions, contentSliceActionsTypes } from "../reducers/content";

const apiUrl = "/api/about";
async function fetchContents() {
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

function* setContents():Generator<any, any, any> {
  try {
    const data = yield call(fetchContents);
    yield put(contentSliceActions.setContents(data));
    yield put(contentSliceActions.setContentRequestCompleted({loading:false}));
  } catch (error) {
    // yield put(fetchDataFailure(error.message));
  }
}

export function* watchContentFetch() {
  yield takeEvery(
    `${contentSliceActionsTypes}/setContentRequestLoading`,
    setContents
  );
}
