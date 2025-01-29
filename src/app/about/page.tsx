'use client';

import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from "react"
import { contentSliceActions } from "../store/reducers/content";
import { State } from '../api/response/types';

const About = () => {
    const dispatch = useDispatch();
    const { contents, loading } = useSelector((state:State) => state.content);

    useEffect(() => {
        dispatch(contentSliceActions.setContentRequestLoading({ loading: true })); // saga watchers are listening to this action
    }, [dispatch]);

    return (
        <div>
            <h1>
                <p>{!loading && contents && contents.length > 0 && contents[0].title}</p>
            </h1>
            <p>{loading && `Loading ...`}</p>
            <p>{!loading && contents && contents.length > 0 && contents[0].content}</p>
        </div>
    );
}

export default About
