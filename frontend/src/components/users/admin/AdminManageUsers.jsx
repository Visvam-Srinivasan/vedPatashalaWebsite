import React, { useState, useEffect } from 'react';
import './stylesheets/adminManageUsers.css';

const dummyUsers = Array.from({ length: 20 }, (_, i) => ({
  id: `U${i + 1}`,
  userType: i % 2 === 0 ? 'guru' : 'student',
  name: `User ${i + 1}`,
  fname: `Father ${i + 1}`,
  mname: `Mother ${i + 1}`,
  address: `Address ${i + 1}`,
  contact: `98765432${i.toString().padStart(2, '0')}`,
  emergency: `87654321${i.toString().padStart(2, '0')}`,
  email: `user${i + 1}@example.com`,
  aadhar: `1234 5678 ${1000 + i}`,
  pan: `ABCDE${i}FGH`,
  bloodGroup: ['A+', 'B+', 'O+', 'AB+'][i % 4],
  dob: `199${i % 10}-0${(i % 9) + 1}-15`,
  languages: { read: true, write: i % 2 === 0, speak: true },
  guruName: i % 2 !== 0 ? `Guru ${Math.floor(i / 2)}` : ''
}));

export default function AdminManageUsers() {
  const [users, setUsers] = useState(dummyUsers);
  const [visibleCount, setVisibleCount] = useState(2);
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredUsers = users.filter(user => {
    const matchFilter = filter === 'all' || user.userType === filter;
    const matchSearch = user.id.includes(search) || user.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const visibleUsers = filteredUsers.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  const handleSelect = id => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="admin-users-container">
      <h2>Manage Users</h2>

      <div className="toolbar">
        <button className="add-user">+ Add User</button>

        <div className="filters">
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="guru">Guru</option>
            <option value="student">Student</option>
          </select>

          <input
            type="text"
            placeholder="Search by ID or Name"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>User Type</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Blood Group</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map(user => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedId === user.id}
                  onChange={() => handleSelect(user.id)}
                />
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.userType}</td>
              <td>{user.contact}</td>
              <td>{user.email}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {visibleCount < filteredUsers.length && (
        <button className="load-more" onClick={loadMore}>Load More</button>
      )}

      {selectedId && (
        <div className="user-actions">
          <button className="update-user">Update</button>
          <button className="delete-user">Delete</button>
        </div>
      )}
    </div>
  );
}
