import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navigation() {
        const [navbarOpen, setNavbarOpen] = React.useState(false);
        return (
          <>
            <nav className="absolute w-screen flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-transparent-500 mb-3 font-roboto ">
              <div className="container px-10 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                  <a
                    className="text-5xl font-bold leading-relaxed inline-block mr-4 ml-8 py-2 whitespace-no-wrap uppercase text-primary font-bold "
                    href="#pablo"
                  >
                    HK
                  </a>
                  <button
                    className="text-secondary cursor-pointer text-3xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </div>
                <div
                  className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                  }
                  id="example-navbar-danger"
                >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                      <a
                        className="px-3 py-2 flex items-center text-lg  font-bold leading-snug text-secondary hover:opacity-75"
                        href="#pablo"
                      >
                          <span className="font-medium mr-8 p-2">Projects</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="px-3 py-2 flex items-center text-lg  font-bold leading-snug text-secondary hover:opacity-75"
                        href="#pablo"
                      >
                          <span className="font-medium mr-8 p-2">Blog</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="px-3 py-2 flex items-center text-lg  font-bold leading-snug text-secondary hover:opacity-75"
                        href="#pablo"
                      >
                        <span className="font-medium mr-8 p-2">About</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="px-3 py-2 flex items-center text-lg  font-bold leading-snug text-secondary hover:opacity-75"
                        href="#pablo"
                      >
                        <span className="font-medium mr-8 border-solid border-2 px-4 py-2">Contact</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </>
    )
}
