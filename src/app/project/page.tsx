'use client';

import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from "react"
import { projectSliceActions } from "../store/reducers/project";
import Card from '../components/Cards';
const Project = () => {
    const dispatch = useDispatch();
    const { projects, loading } = useSelector((state: any) => state.project);

    useEffect(() => {
        dispatch(projectSliceActions.setProjectRequestLoading({ loading: true })); // saga watchers are listening to this action
        console.log("projects")
    }, [dispatch]);

    return (
        <div>
            <h1>
                <p>{!loading && projects && projects.length > 0 && `Projects`}</p>
            </h1>
            <p>{loading && `Loading ...`}</p>
            <div className={`row-start-3 flex gap-6 flex-wrap items-center justify-center`}>
            {!loading && projects && projects.length > 0 && projects.map((p:any) => (<Card title={p.name} description={p.description} imageUrl={''} buttonText={'View'} />))}
            </div>

        </div>
    );
}

export default Project
