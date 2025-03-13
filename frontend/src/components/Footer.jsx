import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import footerLogo  from "../assets/footer-logo.png"
const Footer = () => {
  return (
    
    // footer 
    <footer className="bg-gray-900 text-white py-10 px-4">

      {/* top section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
        <img src={footerLogo} alt="" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="#home" className="hover:text-purple-200">Home</a></li>
            <li><a href="#services" className="hover:text-purple-200">Services</a></li>
            <li><a href="#about" className="hover:text-purple-200">About</a></li>
            <li><a href="#contact" className="hover:text-purple-200">Contact</a></li>
            
          </ul>
        </div>
        {/* Right side- News Letter */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">  
           Subscribe to our newsletter to receive the latest updates, news, and offers!
          </p>
          <div className="flex">
          <input type="email" placeholder="Enter Your Email" 
          className="w-full px-4 py-2 rounded-l-md text-black"
          />
          <button className="bg-red-500 px-6 py-2 rounded-r-md hover:bg-slate-400">Subscribe</button>
          </div>
        </div>
      </div>
      {/* Button Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-x-gray-700 pt-6">
        {/* Left side privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li ><a href="#privacy" className="hover:text-slate-400 ">Privacy Policy</a></li>
          <li ><a href="#terms" className="hover:text-slate-400 ">Terms of Service</a></li>
        </ul>
        {/* Right Side Socicals Icons */}

        <div className="flex gap-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
