import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
