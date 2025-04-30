import { useState, React } from 'react'
import { navs } from '../../utils/statics';
import { logo } from '../../assets'
import { Link } from 'react-router-dom'
import { Button } from './';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);


  return (
    <div className='header border-bottom-gradient'>
      <div className="container">
        <div className="all-between">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className='grow lg:block hidden'>
            <ul className='all-center primary-navs '>
              {navs.map((nav) => (
                <li key={nav.id}>
                  <Link
                    to={nav.path}
                    className="text-white transition nav-link  px-[20px] py-[14px] rounded-[60px] hover:font-medium text-[15px]"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='all-center gap-4'>
            <button onClick={toggleMenu} className='bg-transparent lg:hidden cursor-pointer'>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Button className="btn btn-primary bg-green-gradient primary-theme">Get Funded</Button>
          </div>
        </div>
      </div>

      <ul className={`mobile-navs overflow-hidden transition-all duration-500 ease-in-out lg:hidden ${isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 p-0'}`}>
        {navs.map((nav) => (
          <li key={nav.id} className='mb-4'>
            <Link
              to={nav.path}
              className="text-white transition nav-link  px-[20px] py-[14px] rounded-[60px] hover:font-medium text-[15px]"
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
