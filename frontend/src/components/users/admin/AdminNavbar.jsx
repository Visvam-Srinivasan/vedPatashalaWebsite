import React, { useState } from 'react';
import { Menu, Home, User, Settings, UserPen, ShieldUser, BookOpen, LogOut} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import '../../../global.css';

const menuItems = [
  { label: 'Home', icon: <Home size={20} />, path: '/admin/dashboard' },
  { label: 'Manage Users', icon: <UserPen size={20} />, path: '/admin/manageUsers' },
  { label: 'Manage Roles', icon: <ShieldUser size={20} />, path: '/admin/manageRoles' },
  { label: 'Manage Courses', icon: <BookOpen size={20} />, path: '/admin/manageCourses' },
];

export default function AdminNavbar() {
  const [expanded, setExpanded] = useState(false);

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


