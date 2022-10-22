import Introduction from '../components/Introduction'
import Services from '../components/Services'
import About from '../components/About'
import Work from '../components/Work'
import profilePic from '../assets/images/victor.jpeg'

export default function Home() {
  return (
    <>
      <Introduction 
        title='Hi, I am'
        title_strong='Victor Duran' 
        subtitle='software dev' 
        image={profilePic}
        className='py-[80px]'/>
      <Services />
      <About />
      <Work />
    </>
  )
}