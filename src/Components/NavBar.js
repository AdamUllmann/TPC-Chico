import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../CSS/NavBar.css';
import logo from '../Images/ClubLogo.png'

export default function NavBar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="Club logo" width='25%'/>
      <h1>TPC Chico</h1>
      <h2>Technical Projects Club</h2>
      <ul>
        <CustomLink to="/HomePage">Home</CustomLink>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Events">Events</CustomLink>
        <CustomLink to="/Projects">Projects</CustomLink>
        <CustomLink to="/Contact">Contact Us</CustomLink>
      </ul>
      <a href="https://discord.gg/gZb7q8S7JY" target='_blank' rel="noopener noreferrer" className="cta-button">Join Our Discord</a>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
