import React, { useState, useEffect } from 'react';
import '../stylesheets/adminManageCourses.css';

export default function CourseFormModal({ course, onClose, onSave }) {
  const [name, setName] = useState('');
  const [subCourses, setSubCourses] = useState(['']);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (course) {
      setName(course.name);
      setSubCourses(course.subCourses?.length ? course.subCourses : ['']);
    }
  }, [course]);

  const handleSubCourseChange = (index, value) => {
    const updated = [...subCourses];
    updated[index] = value;
    setSubCourses(updated);
  };

  const addSubCourseField = () => setSubCourses([...subCourses, '']);

  const removeSubCourseField = (index) => {
    const updated = subCourses.filter((_, i) => i !== index);
    setSubCourses(updated.length ? updated : ['']);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert('Course name is required');

    onSave({ name, subCourses: subCourses.filter(sc => sc.trim()) });
    setSaved(true);

    // Close after 1.5 seconds
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="modal-overlay">
      <form className="modal" onSubmit={handleSubmit}>
        <h3>{course ? 'Edit' : 'Add'} Course</h3>

        <label>
          Course Name (required)
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={100}
            required
          />
        </label>

        <div className="sub-course-section">
          <label>Sub Courses (optional)</label>
          {subCourses.map((sub, idx) => (
            <div key={idx} className="sub-course-input">
              <input
                type="text"
                value={sub}
                onChange={e => handleSubCourseChange(idx, e.target.value)}
                maxLength={100}
              />
              <button type="button" onClick={() => removeSubCourseField(idx)}>-</button>
            </div>
          ))}
          <button type="button" onClick={addSubCourseField}>+ Add Sub Course</button>
        </div>

        <div className="modal-actions">
          {saved && <div className="save-message">Saved successfully!</div>}
          <button type="submit" className="update-user">Save</button>
          <button type="button" className="delete-user" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
