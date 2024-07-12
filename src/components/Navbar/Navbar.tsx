"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../store/layoutSlice";
import { RootState } from "../../store/store";
import styles from "./Navbar.module.css";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.layout.darkMode);

  return (
    <nav
      className={`${styles.navbar} ${darkMode ? styles.dark : styles.light}`}
    >
      {/* <div className={styles.logo}>Stoman</div> */}
      <div className={styles.logo}>
        {"Yash Raj".split("").map((letter, index) => {
          return (
            <span key={index} className={styles.letter}>
              {letter}
            </span>
          );
        })}
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* <button className={styles.hireMe}>Hire Me</button> */}
      <div
        className={styles.toggleDarkmode}
        onClick={() => dispatch(toggleDarkMode())}
      >
        {darkMode ? (
          <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
        ) : (
          <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
