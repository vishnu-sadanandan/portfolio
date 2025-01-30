'use client';

import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from "react"
import { projectSliceActions } from "../store/reducers/project";
import Card from '../components/Cards';
import { Project as ProjectType, State } from '../api/response/types';

const Project = () => {
    const dispatch = useDispatch();
    const { projects, loading } = useSelector((state: State) => state.project);

    useEffect(() => {
        dispatch(projectSliceActions.setProjectRequestLoading({ loading: true })); // saga watchers are listening to this action
    }, [dispatch]);

    return (
        <div>
            <p>{loading && `Loading ...`}</p>
            <div className={`row-start-3 flex gap-6 flex-wrap items-center justify-center`}>
            {!loading && projects && projects.length > 0 && projects.map((p:ProjectType) => (<Card key={p.id} title={p.name} description={p.description} buttonText={'View'} />))}
            </div>

        </div>
    );
}

export default Project
