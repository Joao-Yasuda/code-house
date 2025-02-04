import { getCurrentOrg } from '@/auth/auth'
import ProjectListClient from '@/components/projectListClient'
import { getProjects } from '@/http/get-projects'

export default async function ProjectList() {
  const currentOrg = getCurrentOrg()
  const { projects } = await getProjects(currentOrg!)

  return <ProjectListClient projects={projects} />
}
