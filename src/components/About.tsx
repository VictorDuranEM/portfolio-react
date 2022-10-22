import victorRoom from '../assets/images/victor-room.jpeg';

export default function About() {
  return (
    <section id='about' className="max-w-[1000px] mx-auto py-[80px] px-8 sm:grid sm:grid-cols-about sm:grid-rows-about sm:gap-x-3 sm:gap-y-4">
      <h2 className="font-black sm:row-start-1 sm: sm:col-start-1">Who I am</h2>
      <p className="font-secondary text-h3 bg-accent py-[.25em] px-[1em] sm:row-start-2 sm:col-start-1 sm:col-span-full sm:relative sm:-left-[1em] sm:[width:calc(100%+2em)] sm:-z-10 sm:self-start">Software developer</p>
      <p className="sm:row-start-3 sm:col-start-1 mt-6 sm:mt-0">I'm a software developer who loves learning new and exciting technologies. I spent several years working as a backend developer and now I want to become a great full stack developer to create apps that look beautiful and feel awesome.</p>
      <img src={victorRoom} alt="victor in his room" className='w-full mt-5 sm:row-start-1 sm:row-span-3 sm:col-start-2 sm:max-w-[250px] sm:m-0'/>
    </section>
  )
}