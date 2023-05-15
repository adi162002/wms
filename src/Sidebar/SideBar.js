import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBars,
  FaHome,
  FaCity,
  FaTachometerAlt,
  FaUsers,
  FaHandHoldingWater,
  FaWater,
  FaMapMarked,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const adminRoutes = [
  {
    path: "/Dashboard",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/utility",
    name: "Utilities",
    icon: <FaHandHoldingWater />,
  },
  {
    path: "/employees",
    name: "Employee",
    icon: <FaUsers />,
  },
];
const employeeRoutes = [
  {
    path: "/Dashboard",
    name: "Home",
    icon: <FaHome title="Home"/>,
  },
  {
    path: "/city",
    name: "City",
    icon: <FaCity title="city"/>,
  },
  {
    path: "/meter",
    name: "Meter",
    icon: <FaTachometerAlt title="meter" />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUsers title="users" />,
  },
  {
      path:"/metermappings",
      name:"Meter Mappings",
      icon:<FaMapMarkedAlt title="meter mappings"/>
  },
];

const userRoutes = [
  {
    path: "/Dashboard",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/viewmeter",
    name: "View Meter",
    icon: <FaTachometerAlt />,
  },
  {
    path: "/meterreading",
    name: "Meter Reading",
    icon: <FaWater />,
  },
];

function 
SideBar({ children, role }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(role.roleName)

  const routes =
    role.roleName === "ADMIN"
      ? adminRoutes
      : role.roleName === "EMPLOYEE"
      ? employeeRoutes
      : userRoutes;

  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Menu
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="roconsole.log(prop.roleName)utes">
            {routes.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default SideBar;
