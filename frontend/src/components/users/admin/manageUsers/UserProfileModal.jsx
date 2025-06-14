import React from 'react';
import '../stylesheets/userModal.css';

export default function UserProfileModal({ user, onClose, onEdit, onDelete }) {
  if (!user) return null;

  const handleEdit = () => {
    if (onEdit) onEdit(user);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete user ${user.name}?`)) {
      if (onDelete) onDelete(user);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>User Profile</h3>
        <table className="profile-table">
          <tbody>
            <tr><td><strong>ID:</strong></td><td>{user.id}</td></tr>
            <tr><td><strong>Name:</strong></td><td>{user.name}</td></tr>
            <tr><td><strong>User Type:</strong></td><td>{user.userType}</td></tr>
            <tr><td><strong>Father’s Name:</strong></td><td>{user.fname}</td></tr>
            <tr><td><strong>Mother’s Name:</strong></td><td>{user.mname}</td></tr>
            <tr><td><strong>Address Line 1:</strong></td><td>{user.address1}</td></tr>
            <tr><td><strong>Address Line 2:</strong></td><td>{user.address2}</td></tr>
            <tr><td><strong>City/Village:</strong></td><td>{user.city}</td></tr>
            <tr><td><strong>District:</strong></td><td>{user.district}</td></tr>
            <tr><td><strong>State:</strong></td><td>{user.state}</td></tr>
            <tr><td><strong>Contact:</strong></td><td>{user.contact}</td></tr>
            <tr><td><strong>Emergency Contact:</strong></td><td>{user.emergency}</td></tr>
            <tr><td><strong>Email:</strong></td><td>{user.email}</td></tr>
            <tr><td><strong>Aadhaar:</strong></td><td>{user.aadhar}</td></tr>
            <tr><td><strong>PAN:</strong></td><td>{user.pan}</td></tr>
            <tr><td><strong>Date of Birth:</strong></td><td>{user.dob}</td></tr>
            <tr><td><strong>Blood Group:</strong></td><td>{user.bloodGroup}</td></tr>
            {user.userType === 'student' && (
              <tr><td><strong>Guru Name:</strong></td><td>{user.guruName}</td></tr>
            )}
            <tr>
              <td><strong>Languages:</strong></td>
              <td>
                {Object.entries(user.languages).map(([lang, modes]) => (
                  <div key={lang}>
                    {lang}: {['read', 'write', 'speak'].filter(m => modes[m]).join(', ')}
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="modal-actions">
          <button onClick={handleEdit} className="update-user">Update</button>
          <button onClick={handleDelete} className="delete-user">Delete</button>
          <button onClick={onClose} className="close-modal">Close</button>
        </div>
      </div>
    </div>
  );
}
