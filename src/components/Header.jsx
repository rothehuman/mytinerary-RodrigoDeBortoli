import React from 'react'
import { Link as Anchor } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="./">Home</a></li>
                <li><a href="./cities">Cities</a></li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">MyTinerary</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Anchor to={"./"}>Home</Anchor></li>
              <li><Anchor to={"./cities"}>Cities</Anchor></li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">
              <img width={30} src="data:image/png;base64,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" alt="" />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Header