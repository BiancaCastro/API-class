import React from 'react';
import { Link } from 'react-router-dom';
import {Li} from './style'

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <Li><Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link></Li>
    </ul>
    </nav>
  )
}

export default navbar;