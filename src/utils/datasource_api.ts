import type { Project } from '@/types';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

async function getProjects() {
  const res = await axios.get(`/api/projects`);

  return res.data as Project[];
}

async function getProject(id: string) {
  const res = await axios.get(`/api/projects/${id}`);

  return res.data as Project | undefined;
}

async function createProject(project: Project) {
  console.log(project);
}

async function updateProject(project: Project) {
  await axios.put(`/api/projects/${project.id}`, project);
}

async function deleteProject(id: string) {
  await axios.delete(`/api/projects/${id}`);
}

export { getProjects, getProject, createProject, updateProject, deleteProject };
