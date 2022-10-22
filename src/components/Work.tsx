import { WorkPreview } from './WorkPreview';
import productCard from '../assets/images/work/product-card.png';

export default function Work() {
  return (
    <section id='work' className="py-[80px] px-8 bg-dark text-center">
      <h2 className="text-light font-black">My Work</h2>
      <p className="text-h3 text-accent font-black my-4">A selection of my range of work</p>
      <div className='max-w-[1000px] mx-auto grid grid-cols-work'>
        <WorkPreview id='1' image={productCard}  />
      </div>
    </section>
  )
}