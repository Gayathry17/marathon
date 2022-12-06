import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { IoMenu, IoClose } from "react-icons/io5"
import { NavHashLink as NavLink } from "react-router-hash-link"

import { useScrollPosition } from "../../hooks/useScrollPosition"

import "./Navbar.css"

import marathon_logo_text from '../../assets/png/marathon_logo_text.png'

function Navbar() {
  const [drawer, setDrawer] = useState(false)

  const handleDrawerOpen = () => {
    setDrawer(true)
  }

  const handleDrawerClose = () => {
    setDrawer(false)
  }

  const scrollPosition = useScrollPosition()

  const navStyle = {
    background: scrollPosition > 200 ? "#ffe3b3" : "transparent",
    boxShadow:
      scrollPosition > 200 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
  }
  const activeStyle = {
    opacity: 0.8,
  }

  return (
    <div className="navbar" style={navStyle}>
      <div className="navbar__main container">
        <div className="nav_logo">
        <NavLink
            to="/#"
          >
          <img src={marathon_logo_text} alt="" />
        </NavLink>
        </div>
        <div className="nav_contents">
          <NavLink to="/#" className="nav__link" activeStyle={activeStyle}>
            Home
          </NavLink>
          <NavLink to="/#about" className="nav__link" activeStyle={activeStyle}>
            About
          </NavLink>
          <NavLink to="/#schedule" className="nav__link" activeStyle={activeStyle}>
            Schedule
          </NavLink>
          <NavLink to="/#excel" className="nav__link" activeStyle={activeStyle}>
            Excel
          </NavLink>
          <NavLink to="/#sponsors" className="nav__link" activeStyle={activeStyle}>
            Sponsors
          </NavLink>
          <NavLink to="/#contact" className="nav__link" activeClassName="nav__link_active">
            Contact
          </NavLink>
        </div>
        <div className="nav_register">
          <button className="nav_register_btn">Register</button>
        </div>

        <div className="nav_hamburger" onClick={handleDrawerOpen}>
          <IoMenu className="nam_menu_icon" />
        </div>
      </div>

      <Drawer
        disableScrollLock={true}
        anchor="left"
        open={drawer}
        onClose={handleDrawerClose}
        sx={{
          borderRadius: 20,
          width: "90%",
        }}
      >
        <div className="navbar__mob">
          <div className="navbar_mob_close" onClick={handleDrawerClose}>
            <IoClose />
          </div>
          <div className="navbar__mobcontents">
            <NavLink to="/#about" className="navmob__link" onClick={handleDrawerClose}>
              Home
            </NavLink>
            <NavLink to="/#about" className="navmob__link" onClick={handleDrawerClose}>
              About
            </NavLink>
            <NavLink to="/#schedule" className="navmob__link" onClick={handleDrawerClose}>
              Schedule
            </NavLink>
            <NavLink to="/#excel" className="navmob__link" onClick={handleDrawerClose}>
              Excel
            </NavLink>
            <NavLink to="/#sponsors" className="navmob__link" onClick={handleDrawerClose}>
              Sponsors
            </NavLink>
            <NavLink to="/#contact" className="navmob__link" onClick={handleDrawerClose}>
              Contact
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar