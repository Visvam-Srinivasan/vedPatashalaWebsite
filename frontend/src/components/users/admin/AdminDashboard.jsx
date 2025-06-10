import React from 'react';
import { Users, GraduationCap, BookOpen, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import './stylesheets/adminDashboard.css'; 

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard-container">
      <div className="dashboard-wrapper">
        <h1 className="dashboard-heading">Admin Dashboard</h1>

        <p className="dashboard-subtitle">
          Welcome to the Ved Patashala Admin Panel - Your interface to manage students and gurus
        </p>

        <div className="dashboard-cards">

          <div className="dashboard-card">
            <div className="card-header">
              <Users size={24} className="card-icon" />
              <h3 className="card-title">User Management</h3>
            </div>
            <p className="card-description">
              Oversee guru and student profiles, assignments, and teaching schedules.
            </p>
            <Link to="/admin/manageUsers">
              <button className="card-button">Manage Users</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <Shield size={24} className="card-icon" />
              <h3 className="card-title">Role Management</h3>
            </div>
            <p className="card-description">
              Define user roles, permissions, and access levels throughout the system.
            </p>
            <Link to="/admin/manageRoles">
              <button className="card-button">Manage Roles</button>
            </Link>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <BookOpen size={24} className="card-icon" />
              <h3 className="card-title">Course Management</h3>
            </div>
            <p className="card-description">
              Create and manage courses, syllabi, and learning materials.
            </p>
            <Link to="/admin/manageCourses">
              <button className="card-button">Manage Courses</button>
            </Link>
          </div>
        </div>

        <div className="dashboard-stats">
          <h3 className="stats-heading">Quick Overview</h3>
          <div className="stats-grid">
            <div>
              <div className="stat-value">0</div>
              <div className="stat-label">Total Students</div>
            </div>
            <div>
              <div className="stat-value">0</div>
              <div className="stat-label">Active Gurus</div>
            </div>
            <div>
              <div className="stat-value">0</div>
              <div className="stat-label">Courses</div>
            </div>
            <div>
              <div className="stat-value">0%</div>
              <div className="stat-label">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
