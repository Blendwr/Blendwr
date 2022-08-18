import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProjectsPage = () => {
  return (
    <>
      <MetaTags title="Projects" description="Projects page" />

      <h1>ProjectsPage</h1>

      <p>
        Find me in
        <code>./web/src/pages/ProjectsPage/ProjectsPage.js</code>
      </p>

      <p>
        My default route is named
        <code>projects</code>, link to me with `
        <Link to={routes.projects()}>Projects</Link>`
      </p>
    </>
  )
}

export default ProjectsPage
