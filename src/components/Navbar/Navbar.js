import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { IoMenu, IoClose } from "react-icons/io5"
import { NavHashLink as NavLink } from "react-router-hash-link"
import { useScrollPosition } from "../../hooks/useScrollPosition"

import "./Navbar.css"


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
    background: scrollPosition > 200 ? "#26648e" : "transparent",
    boxShadow:
      scrollPosition > 200 ? "0px 2px 9px rgba(0, 0, 0, 0.11)" : "none",
  }

  return (
    <div className="navbar" style={navStyle}>
      <div className="navbar__main container">
        <div className="nav_logo">
        {/* <NavLink
            to="/#"
          >
          <img src={devsprintLogo} alt="" />
        </NavLink> */}
        </div>
        <div className="nav_contents">
          <NavLink to="/#about" className="nav__link">
            About
          </NavLink>
          <NavLink to="/#schedule" className="nav__link">
            Schedule
          </NavLink>
          <NavLink to="/#excel" className="nav__link">
            Excel
          </NavLink>
          <NavLink to="/#sponsors" className="nav__link">
            Sponsors
          </NavLink>
          <NavLink to="/#contact" className="nav__link">
            Contact
          </NavLink>
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