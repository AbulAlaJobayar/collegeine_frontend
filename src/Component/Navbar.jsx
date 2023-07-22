import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import avater from "../assets/pngwing.png";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  console.log(user?.photoURL);
  const NavOption = (
    <>
      <li>
        <NavLink
          to="/"
          className="font-bold"
          style={({ isActive }) => {
            return {
              color: isActive ? "#ff6900" : "#15295f",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Colleges"
          className="font-bold"
          style={({ isActive }) => {
            return {
              color: isActive ? "#ff6900" : "#15295f",
            };
          }}
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Admission"
          className="font-bold"
          style={({ isActive }) => {
            return {
              color: isActive ? "#ff6900" : "#15295f",
            };
          }}
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/MyColleges"
          className="font-bold"
          style={({ isActive }) => {
            return {
              color: isActive ? "#ff6900" : "#15295f",
            };
          }}
        >
          My Colleges
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <Container>
        <div className="navbar bg-base-100 container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {NavOption}
              </ul>
            </div>
            <a className=" text-xl text-[#15295f] font-bold">COLLEGEINE</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal flex gap-4 px-5">{NavOption}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex justify-between items-center gap-4">

              {user ? (
                <>
                  <img
                    className="rounded-full border-2"
                    src={user && user.photoURL ? user.photoURL : avater}
                    alt="profile"
                    height="40"
                    width="40"
                    title={
                      user && user.displayName ? user.displayName : "guest"
                    }
                  />
                  <button className="font-semibold" onClick={logOut}>
                  Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    {" "}
                    <button className="btn "> Login</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
      <hr />
    </>
  );
};

export default Navbar;
