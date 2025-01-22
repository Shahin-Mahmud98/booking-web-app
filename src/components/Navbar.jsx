// import { HiMiniBars3CenterLeft } from "react-icons/hi2"


import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2"
import { IoSearchOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import avatarImg from "../assets/avatar.png"
import { useState } from "react"


//navigation
const navigation = [
  {name:"Dashboard", href:"/user-dashboard"},
  {name:"orders", href:"/orders"},
  {name:"Cart Page", href:"/cart"},
  {name:"Check Out", href:"/checkout"},

]

const Navbar = () => {
  const [isDropDownOpen,setIsDropdownOpen] = useState(false)

const currentUser = false;

  const handleLogOut = ()=>{
    // logout()
  }

  const token = localStorage.getItem('token');
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6 ">
        <nav className="flex justify-between items-center ">
            {/* left side */}
            <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
            <HiMiniBars3CenterLeft className="size-6"/>
            </Link>
            {/* Search input */}
            <div className="relative sm:w-72 w-40 space-x-2">
                <IoSearchOutline className="absolute inline-block left-3 inset-y-2"/>
                <input type="text" placeholder="Search Here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
            </div>
            </div>


            {/* Right side */}
            <div className="relative flex items-center md:space-x-3 space-x-2">
               <div>
                {
                  currentUser ? <>
               <button onClick={()=>setIsDropdownOpen(!isDropDownOpen)}>
                <img src={avatarImg} alt=""  className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''}`}/>
               </button>
               {/* show dropdown */}
               {
                isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                   {
                     navigation.map((item) =>(
                      <li key={item.name} onClick={()=>setIsDropdownOpen(false)}>
                        <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                        {item.name}
                        </Link>
                      </li>
                    ))
                   }
                  <li>
                    <button onClick={handleLogOut}
                     className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                      logout
                    </button>
                  </li>
                    </ul>
                  </div>
                )
               }
                  
               {/* user logo */}
              
               </>  : token ? 
               <Link to="dashboard" className="border-b-2 border-primary">Dashboard</Link> : (
               <Link to="/login" >
               <HiOutlineUser className="size-6"/>
               </Link>
               )
              }
               
               </div>
               
               {/* lineHeart */}
               <button className="hidden sm:block">
                <HiOutlineHeart className="size-8"></HiOutlineHeart>
               </button>
               {/* shopping cart */}
               <Link to="/cart" className="bg-pink-400 p-1 sm:px-6 flex items-center rounded-sm">
               <HiOutlineShoppingCart className=""/>
               <span className="text-sm font-semibold sm-ml-1">0</span>
               </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
