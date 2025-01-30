import {contentSliceReducer} from "./reducers/content";
import {projectSliceReducer} from "./reducers/project";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import { menuSliceReducer } from "./reducers/menu";
import { skillSliceReducer } from "./reducers/skill";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
    {
        reducer: { content: contentSliceReducer, project: projectSliceReducer, menu: menuSliceReducer, skill: skillSliceReducer},
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
    },
);

sagaMiddleware.run(rootSaga);

export default store;
