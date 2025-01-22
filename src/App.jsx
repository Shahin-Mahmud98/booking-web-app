
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Footer from './components/Footer'

function App() {
  

  return (
    <div>
       <Navbar/>
       <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
          <Outlet />
        </main>
       <Footer/>
    </div>
  )
}

export default App
