'use client';

import { useSelector } from 'react-redux';
import { Project as ProjectType, State } from '../../api/response/types';
import Card from '../../components/Cards';

const Details = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const { projects } = useSelector((state: State) => state.project);
    const project = projects.find((p) => p.id === Number(id));
    
    if (!project) return <p className="p-6">Project not found.</p>;

    const { skills } = useSelector((state: State) => state.skill);
    const menuOptions = skills.filter(o => project.skill.includes(o.skill))

    return ((<Card key={project.id} title={project.name} description={project.description} headerImg={project.companyPrefix} menuOptions={menuOptions} page={`${project.id}`} />))
}

export default Details;