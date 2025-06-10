import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import logo from "../../assets/navbar/logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { CircleUser, LogOut, Settings, UserCog } from 'lucide-react';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userPic = localStorage.getItem('profilePic');
    if (token) {
      setIsLoggedIn(true);
      setProfilePic(userPic);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('profilePic');
    setIsLoggedIn(false);
    setShowMenu(false);
    navigate('/login');
  };

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="logo-title">
          <img src={logo} alt="Logo" className="logo" />
          <div className="title">
            <h1 className="title1">THE</h1>
            <h1 className="title2">VED PATASHALA</h1>
          </div>
        </Link>
      </div>

    {isLoggedIn && (
    <div className="profile-container" ref={dropdownRef}>
        <div
        className="profile-icon"
        onClick={() => setShowMenu(!showMenu)}
        >
        {profilePic ? (
            <img src={profilePic} alt="Profile" className="profile-pic" />
        ) : (
            <CircleUser size={24} />
        )}
        </div>

        {showMenu && (
        <div className="dropdown">
            <div className="dropdown-item" onClick={() => navigate("/profile")}>
            <UserCog size={18} className="dropdown-icon" />
            Edit Profile
            </div>
            <div className="dropdown-item" onClick={() => navigate("/settings")}>
            <Settings size={18} className="dropdown-icon" />
            Settings
            </div>
            <div className="dropdown-item" onClick={handleLogout}>
            <LogOut size={18} className="dropdown-icon" />
            Logout
            </div>
        </div>
        )}
    </div>
    )}
    </div>
  );
}

export default Header;
