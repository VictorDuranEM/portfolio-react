import frontendMentorLogo from '../assets/images/frontendmentor.svg';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-accent text-center py-12 px-0 mt-auto">
      <a className="text-h3 hover:opacity-70 hover:underline font-black break-words" href="mailto:victor.duran.em@gmail.com">victor.duran.em@gmail.com</a>
      <ul className="flex justify-center items-center mt-8 gap-8">
        <li><a className="text-h3 hover:opacity-70" href="https://github.com/VictorDuranEM" target='_blank'><i className="fa-brands fa-github"></i></a></li>
        <li><a className="text-h3 hover:opacity-70" href="https://www.frontendmentor.io/profile/VictorDuranEM" target='_blank'><img className='w-[1.7rem]' src={frontendMentorLogo}/></a></li>
        <li><a className="text-h3 hover:opacity-70" href="https://twitter.com/EnterMatchPulse" target='_blank'><i className="fa-brands fa-twitter"></i></a></li>
      </ul>
    </footer>
  )
}