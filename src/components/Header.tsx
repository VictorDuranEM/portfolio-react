import { useState } from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import logo from '../assets/images/entermatch.png'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  
  // Hamburger styles
  const hamburgerClasses = 'block relative w-8 h-[3px] rounded bg-accent transition-transform'
  const hamburgerBeforeClasses = 'before:w-8 before:h-[3px] before:rounded before:bg-accent before:transition-transform before:absolute before:right-0 before:top-2'
  const hamburgerAfterClasses = 'after:w-8 after:h-[3px] after:rounded after:bg-accent after:transition-transform after:absolute after:right-0 after:bottom-2'
  const hamburgerNavOpenClasses = 'rotate-[.625turn] before:rotate-[90deg] before:top-0 after:opacity-0'
  
  return (
    <header className="flex justify-between p-6">
      <Link to="/" className='max-w-[130px]'>
        <img src={logo} alt="" />
      </Link>
      <button onClick={() => setNavOpen(prev => !prev)} aria-label='toggle-navigation' className='p-2 absolute right-4 top-5 z-50'>
        <span className={`${hamburgerClasses} ${hamburgerBeforeClasses} ${hamburgerAfterClasses} ${navOpen ? hamburgerNavOpenClasses: ''}`}></span>
      </button>
      <nav className={`bg-dark text-light inset-0 fixed z-40 translate-x-full transition-transform ${navOpen ? 'translate-x-0' : ''}`}>
        <ul className='flex flex-col h-full justify-evenly items-center m-0 p-0'>
          <li><HashLink className='font-black text-h2 hover:text-accent' onClick={() => setNavOpen(prev => !prev)} to="/#home">Home</HashLink></li>
          <li><HashLink className='font-black text-h2 hover:text-accent' onClick={() => setNavOpen(prev => !prev)} to="/#services">My Services</HashLink></li>
          <li><HashLink className='font-black text-h2 hover:text-accent' onClick={() => setNavOpen(prev => !prev)} to="/#about">About me</HashLink></li>
          <li><HashLink className='font-black text-h2 hover:text-accent' onClick={() => setNavOpen(prev => !prev)} to="/#work">My Work</HashLink></li>
        </ul>
      </nav>
    </header>
  )
}