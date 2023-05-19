import { Route, Routes } from 'react-router-dom'

import ExpPage from '../pages/exp'
import FreelancerPage from '../pages/freelancer'
import IndexPage from '../pages'
import ProjectsPage from '../pages/projects'
import ServicesPage from '../pages/services'
import SkillsPage from '../pages/skills'
import SocialPage from '../pages/social'
import TechsPage from '../pages/techs'
import TechsNodePage from '../pages/techs/techs_node'

export default function ConfigRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/experiencia" element={<ExpPage />} />
      <Route path="/freelancer" element={<FreelancerPage />} />
      <Route path="/projetos" element={<ProjectsPage />} />
      <Route path="/servicos" element={<ServicesPage />} />
      <Route path="/habilidades" element={<SkillsPage />} />
      <Route path="/redes-sociais" element={<SocialPage />} />
      <Route path="/tecnologias" element={<TechsPage />} />
      <Route path="/tecnologias/node" element={<TechsNodePage />} />
    </Routes>
  );
}
