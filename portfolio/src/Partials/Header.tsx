import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleNavBar = () => {
    setIsActive(!isActive);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // const container = {
  //   show: {
  //     transition: {
  //       staggerChildren: 0.35,
  //     },
  //   },
  // };

  return (
    <>
      <HeaderStyle>
        <div className="Logo">
          <Link to="/">Ron</Link>
        </div>

        <div className="nav-Links">
          <div className="navItem">
            <button onClick={toggleNavBar}>Works</button>
          </div>
          <div className="navItem">
            <Link className="contactButton" to="/contact">
              CONTACT NOW
            </Link>
          </div>
        </div>
      </HeaderStyle>

      {/* Animated Navbar */}
      <NavbarPageComponent
        as={motion.div}
        initial={{ y: "-100%" }}
        animate={{ y: isActive ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.div
          className="menu"
          variants={containerVariants}
          initial="hidden"
          animate={isActive ? "visible" : "hidden"}
        >
          <motion.h1 variants={itemVariants}>HOME</motion.h1>
          <motion.h1 variants={itemVariants}>WORK</motion.h1>
          <motion.h1 variants={itemVariants}>CONTACT</motion.h1>
        </motion.div>
        <button className="closeButton" onClick={toggleNavBar}>
          Close
        </button>
      </NavbarPageComponent>
    </>
  );
}

const HeaderStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--accent-color);
  color: var(--primary-color);
  height: 8vh;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 0;
  padding: 0 5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .Logo {
    a {
      text-decoration: none;
      color: var(--primary-color);
      transition: color 0.3s ease;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }

  .nav-Links {
    display: flex;
    gap: 2rem;

    .navItem {
      button {
        background: none;
        border: none;
        color: var(--primary-color);
        font-weight: bold;
        cursor: pointer;
        font-size: 1rem;
        transition: color 0.3s ease;

        &:hover {
          color: var(--secondary-color);
        }
      }

      .contactButton {
        text-decoration: none;
        background-color: var(--secondary-color);
        color: var(--primary-color);
        padding: 1rem 1rem;
        border-radius: 20px;
        font-weight: 800;
        letter-spacing: -1px;
        transition:
          background-color 0.3s ease,
          transform 0.2s ease;

        &:hover {
          background-color: var(--primary-color);
          color: var(--accent-color);
          transform: scale(1.1);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 0 2rem;

    .Logo {
      font-size: 1.5rem;
    }

    .nav-Links {
      gap: 1rem;

      .contactButton {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
      }
    }
  }
`;

const NavbarPageComponent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--accent-color);
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .menu {
    h1 {
      font-size: 5rem;
      color: var(--primary-color);
      margin: 1rem 0;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }

  .closeButton {
    margin-top: 2rem;
    background-color: var(--primary-color);
    color: var(--accent-color);
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--secondary-color);
    }
  }

  @media (max-width: 768px) {
    .menu h1 {
      font-size: 3rem;
    }
  }
`;

export default Header;
