import { WorkPreview } from './WorkPreview';
import { projects } from '../assets/projects';
import productCard from '../assets/images/work/product-card.png';

export default function Work() {
  return (
    <section id='work' className="py-[80px] px-8 bg-dark text-center">
      <h2 className="text-light font-black">My Work</h2>
      <p className="text-h3 text-accent font-black my-4">A selection of my range of work</p>
      <div className='max-w-[1000px] mx-auto grid grid-cols-work'>
        {projects.map((project) => (
          <WorkPreview key={project.id} id={project.id} image={project.image} />
        ))}
      </div>
    </section>
  )
}