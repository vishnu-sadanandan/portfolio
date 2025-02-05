import { contentSliceReducer } from "./reducers/content";
import { projectSliceReducer } from "./reducers/project";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { menuSliceReducer } from "./reducers/menu";
import { skillSliceReducer } from "./reducers/skill";
import { roleSliceReducer } from "./reducers/role";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    content: contentSliceReducer,
    project: projectSliceReducer,
    menu: menuSliceReducer,
    skill: skillSliceReducer,
    role: roleSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
