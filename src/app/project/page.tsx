'use client';

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Project as ProjectType, State } from '../api/response/types';
import { projectSliceActions } from "../store/reducers/project";
import { ProjectCard } from './ProjectCard';

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
            {!loading && projects && projects.length > 0 && projects.map((p:ProjectType) => (<ProjectCard key={p.id} project={p} />))}
            </div>

        </div>
    );
}

export default Project
