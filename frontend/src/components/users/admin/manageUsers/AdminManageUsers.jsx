import React, { useState } from 'react';
import '../stylesheets/adminManageUsers.css';
import UserProfileModal from './UserProfileModal';
import UserFormModal from './UserFormModal';

const dummyUsers = Array.from({ length: 10 }, (_, i) => {
  const isStudent = i % 2 !== 0;
  const userId = isStudent ? `S-100${i + 1}` : `G-100${i + 1}`;
  return {
    id: userId,
    name: `User ${i + 1}`,
    fname: `Father ${i + 1}`,
    mname: `Mother ${i + 1}`,
    userType: isStudent ? 'student' : 'guru',
    contact: `98765432${i.toString().padStart(2, '0')}`,
    district: `District ${i + 1}`,
    address1: `Address Line 1 for User ${i + 1}`,
    address2: `Address Line 2 for User ${i + 1}`,
    city: `City ${i + 1}`,
    state: `State ${i + 1}`,
    emergencyContact: `12345678${i.toString().padStart(2, '0')}`,
    email: `user${i + 1}@example.com`,
    aadhaar: `1234-5678-90${i.toString().padStart(2, '0')}`,
    pan: `ABCDE${i}FGH`,
    dob: `199${i}-01-01`,
    bloodGroup: 'O+',
    guruName: `Guru ${i + 1}`,
    languages: [
      { name: 'English', skills: ['Read', 'Write', 'Speak'] },
      { name: 'Hindi', skills: ['Read', 'Speak'] }
    ],
  };
});

const AdminManageUsers = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [visibleCount, setVisibleCount] = useState(2);
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    setVisibleCount(2); // Reset on filter change
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(2); // Reset on search change
  };

  const filteredUsers = users.filter(user => {
    const matchesType = filterType === 'all' || user.userType === filterType;
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const visibleUsers = filteredUsers.slice(0, visibleCount);

  const handleViewProfile = (user) => {
    setSelectedUser(user);
    setShowProfile(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(prev => prev.filter(user => user.id !== userId));
    }
  };

  const handleSaveUser = (newUser) => {
    setUsers(prev => {
      const exists = prev.find(user => user.id === newUser.id);
      return exists
        ? prev.map(user => (user.id === newUser.id ? newUser : user))
        : [...prev, newUser];
    });
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  return (
    <div className="admin-users-container">
      <h2>Manage Users</h2>

      <div className="toolbar">
        <div className="filters">
          <select value={filterType} onChange={handleFilterChange}>
            <option value="all">All Types</option>
            <option value="student">Student</option>
            <option value="guru">Guru</option>
          </select>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <button className="add-user" onClick={handleAddUser}>+ Add User</button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>User Type</th>
            <th>Contact</th>
            <th>District</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.userType}</td>
              <td>{user.contact}</td>
              <td>{user.district}</td>
              <td>
                <div className="action-buttons">
                  <button className="update-user" onClick={() => handleViewProfile(user)}>View</button>
                  <button className="update-user" onClick={() => handleEditUser(user)}>Edit</button>
                  <button className="delete-user" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {visibleCount < filteredUsers.length && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button onClick={loadMore} className="load-more">Load More</button>
        </div>
      )}

      {showProfile && (
       <UserProfileModal
          user={selectedUser}
          onClose={() => setShowProfile(false)}
          onEdit={(user) => {
            setSelectedUser(user);
            setShowForm(true); 
          }}
          onDelete={(user) => {
            setUsers(prev => prev.filter(u => u.id !== user.id));
            setShowProfile(false);
          }}
        />
      )}

      {showForm && (
        <UserFormModal
          user={selectedUser}
          onSave={handleSaveUser}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default AdminManageUsers;
