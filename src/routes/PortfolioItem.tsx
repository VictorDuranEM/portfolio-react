import { useLoaderData } from "react-router-dom"
import Introduction from "../components/Introduction"
import { Project, projects } from "../assets/projects"

export async function loader({ params }: { params: { id?: string } }) {
  const project = projects.find(p => p.id === params.id)
  if (!project) {
    throw new Error('Project not found')
  }
  return project
}

export default function PortfolioItem() {
  const portfolioItem = useLoaderData() as Project
  return (
    <>
      <Introduction
        title={portfolioItem.title}
        title_strong={portfolioItem.titleStrong}
        subtitle={portfolioItem.subtitle}
        image={portfolioItem.image}
        className='pt-[80px] mb-12'/>
        
      <div className="px-8 pb-16 max-w-4xl mx-auto">
        <p className="max-w-xl mx-auto">{portfolioItem.description}</p>
        <h2 className="text-center text-3xl mt-16">Links</h2>
        <ul className="mt-6 flex flex-col gap-4">
          {portfolioItem.links.map(link => (
            <li key={link.name} className="text-center">
              <a href={link.url} target="_blank" className="text-blue-500 hover:text-blue-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="text-center text-3xl mt-16">Technologies Used</h2>
        <ul className="mt-6 flex flex-col gap-4">
          {portfolioItem.technologies.map(technology => (
            <li key={technology.name} className="text-center">
              <a href={technology.url} target="_blank" className="text-blue-500 hover:text-blue-600">
                {technology.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}