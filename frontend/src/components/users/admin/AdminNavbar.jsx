import React, { useState } from 'react';
import { Menu, Home, User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

const menuItems = [
  { label: 'Home', icon: <Home size={20} />, path: '/dashboard' },
  { label: 'Profile', icon: <User size={20} />, path: '/profile' },
  { label: 'Settings', icon: <Settings size={20} />, path: '/settings' }
];

export default function AdminNavbar() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <button onClick={() => setExpanded(!expanded)} className="toggle-button">
        <Menu />
      </button>

      <nav className="menu">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} className="menu-item">
            <div className="icon">{item.icon}</div>
            {expanded && <span className="label">{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}


