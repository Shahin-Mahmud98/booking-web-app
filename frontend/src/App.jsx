
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvide } from './context/AuthContext'
// import Navbar2 from './components/Navbar2'

function App() {
  

  return (
    <>
       <AuthProvide>
        {/* <Navbar2/> */}
       <Navbar/>
       <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
          <Outlet />
        </main>
       <Footer/>
       </AuthProvide>
    </>
  )
}

export default App
