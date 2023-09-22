import { useState } from 'react'
import { Link as Anchor } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SignOut from './SignOut'

const Header = () => {

  let [show, setShow] = useState(false);
  const user = useSelector(store => store.userReducer.user);

  const defaultPhoto = 'https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png';

  return (
    <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Anchor to={"./"}>Home</Anchor></li>
                <li><Anchor to={"./cities"}>Cities</Anchor></li>
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
            <SignOut/>
            {/* <Anchor to={"./signin"} className="btn">
              Sign In<img width={30} src={user ? user.photo : defaultPhoto} alt="" />
            </Anchor> */}
          </div>
        </div>
    </div>
  )
}

export default Header