import { auth } from "../Pages/firebase";
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(false);
  const [open, setOpen] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user && window.location.pathname !== "/login") {
      setToken(true);
    } else {
      setToken(false);
    }
  });
  const handleLogout = () => {
    auth.signOut();
    setToken(false);
    navigate("/");
  };
  useEffect(() => {
    console.log("open", open);
  }, [open]);
  return (
    <div className="flex items-center justify-between py-4 text-sm mb-5 border-b border-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-[#3f5fff] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-[#3f5fff] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-[#3f5fff] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-[#3f5fff] w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 cursor-pointer group relative"
          >
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5 " src={assets.dropdown_icon} alt="" />
            <div
              className={`absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 ${open ? "block" : "hidden"} sm:hidden sm:group-hover:block`}
            >
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={handleLogout}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#3f5fff] text-white px-2 py-3 text-xs md:text-[15px] md:px-8 md:py-3 rounded-full font-light md:block cursor-pointer"
          >
            Create account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        <div
          className={`md:hidden ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } right-0 top-0 bottom-0 z-20 overflow-hidden transition-all bg-white`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block ">Home</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded inline-block ">All Doctors</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block "> About</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block ">Contact</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
