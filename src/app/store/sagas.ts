import { all } from "redux-saga/effects";
import { watchContentFetch } from "./sagas/content";
import { watchProjectFetch } from "./sagas/project";
import { watchMenuFetch } from "./sagas/menu";
import { watchSkillFetch } from "./sagas/skill";
import { watchRoleFetch } from "./sagas/role";
// Export the root saga
export default function* rootSaga() {
  yield all([
    watchContentFetch(),
    watchProjectFetch(),
    watchMenuFetch(),
    watchSkillFetch(),
    watchRoleFetch(),
  ]);
}
