import React, { useState, useEffect } from 'react';
import '../stylesheets/userModal.css';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const states = ['Tamil Nadu', 'Kerala', 'Karnataka', 'Maharashtra', 'Delhi', 'Uttar Pradesh', 'Bihar'];
const guruOptions = ['Guru A', 'Guru B', 'Guru C'];

export default function UserFormModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    userType: 'student',
    fname: '',
    mname: '',
    address1: '',
    address2: '',
    city: '',
    district: '',
    state: '',
    contact: '',
    emergency: '',
    email: '',
    aadhar: '',
    pan: '',
    dob: '',
    bloodGroup: '',
    guruName: '',
    languages: {}
  });

  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (lang, mode) => {
    setFormData(prev => ({
      ...prev,
      languages: {
        ...prev.languages,
        [lang]: {
          ...prev.languages[lang],
          [mode]: !prev.languages[lang]?.[mode]
        }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose(); // optional: close modal after showing success
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <form className="modal" onSubmit={handleSubmit}>
        <h3>{user ? 'Edit' : 'Add'} User</h3>

        <div className="form-grid">
          <label>Name<input name="name" value={formData.name} onChange={handleInput} required /></label>
          <label>User Type
            <select name="userType" value={formData.userType} onChange={handleInput}>
              <option value="student">Student</option>
              <option value="guru">Guru</option>
            </select>
          </label>
          <label>Father’s Name<input name="fname" value={formData.fname} onChange={handleInput} required /></label>
          <label>Mother’s Name<input name="mname" value={formData.mname} onChange={handleInput} required /></label>
          <label>Address Line 1<input name="address1" value={formData.address1} onChange={handleInput} required /></label>
          <label>Address Line 2<input name="address2" value={formData.address2} onChange={handleInput} /></label>
          <label>City/Village<input name="city" value={formData.city} onChange={handleInput} required /></label>
          <label>District<input name="district" value={formData.district} onChange={handleInput} required /></label>
          <label>State
            <select name="state" value={formData.state} onChange={handleInput} required>
              <option value="">Select</option>
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </label>
          <label>Contact No<input name="contact" value={formData.contact} onChange={handleInput} required /></label>
          <label>Emergency Contact<input name="emergency" value={formData.emergency} onChange={handleInput} required /></label>
          <label>Email<input name="email" value={formData.email} onChange={handleInput} /></label>
          <label>Aadhaar<input name="aadhar" value={formData.aadhar} onChange={handleInput} required /></label>
          <label>PAN<input name="pan" value={formData.pan} onChange={handleInput} /></label>
          <label>Date of Birth<input type="date" name="dob" value={formData.dob} onChange={handleInput} required /></label>
          <label>Blood Group
            <select name="bloodGroup" value={formData.bloodGroup} onChange={handleInput} required>
              <option value="">Select</option>
              {bloodGroups.map(bg => <option key={bg} value={bg}>{bg}</option>)}
            </select>
          </label>

          {formData.userType === 'student' && (
            <label>Guru Name
              <select name="guruName" value={formData.guruName} onChange={handleInput}>
                <option value="">Select</option>
                {guruOptions.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </label>
          )}

          <div className="language-section">
            <label>Languages:</label>
            <table className="language-table">
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Read</th>
                  <th>Write</th>
                  <th>Speak</th>
                </tr>
              </thead>
              <tbody>
                {['Tamil', 'English', 'Hindi'].map(lang => (
                  <tr key={lang}>
                    <td>{lang}</td>
                    {['read', 'write', 'speak'].map(mode => (
                      <td key={mode}>
                        <input
                          type="checkbox"
                          checked={formData.languages[lang]?.[mode] || false}
                          onChange={() => handleLanguageChange(lang, mode)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {saveSuccess && <div className="save-success">User saved successfully!</div>}

        <div className="modal-actions">
          <button type="submit" className="update-user">Save</button>
          <button type="button" onClick={onClose} className="delete-user">Cancel</button>
        </div>
      </form>
    </div>
  );
}
