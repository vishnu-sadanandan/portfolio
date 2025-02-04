"use client";
import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Project as ProjectType, State } from "../../api/response/types";
import Card from "../../components/Cards";
import { projectSliceActions } from "@/app/store/reducers/project";
import PageView from "@/app/components/Cards/details";

const Details = ({ params }: { params: { id: string } }) => {
  const { id } = use(params);
  const dispatch = useDispatch();
  const { projects } = useSelector((state: State) => state.project);
  const project = projects.find((p) => p.id === Number(id));
  const { skills } = useSelector((state: State) => state.skill);
  const menuOptions = skills.filter((o) => project.skill.includes(o.skill));

  useEffect(() => {
    id &&
      !project &&
      dispatch(projectSliceActions.setProjectRequestLoading({ loading: true })); // saga watchers are listening to this action
  }, [id, project]);

  if (!project) return <p className="p-6">Loading project details...</p>;

  return (
    <PageView
      key={project.id}
      title={project.name}
      description={project.description}
      headerImg={project.companyPrefix}
      menuOptions={menuOptions}
      page={`${project.id}`}
    />
  );
};

export default Details;
