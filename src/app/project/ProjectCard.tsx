
import { useSelector } from 'react-redux';
import { Project as ProjectType, State } from '../api/response/types';
import Card from '../components/Cards';
interface ProjectCardProps {
    project: ProjectType;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { skills } = useSelector((state: State) => state.skill);
    const menuOptions = skills.filter(o => project.skill.includes(o.skill))
    return ((<Card key={project.id} title={project.name} description={project.description} headerImg={project.companyPrefix} menuOptions={menuOptions} />))
}