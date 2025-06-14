import React, { useState } from 'react';
import '../stylesheets/adminManageCourses.css';
import CourseFormModal from './CourseFormModal';

const dummyCourses = [
  {
    name: 'Veda 1',
    subCourses: ['Sanskrit 1', 'Sanskrit 2']
  },
  {
    name: 'Veda 2',
    subCourses: ['Sanskrit 1', 'Sanskrit 2']
  },
];

export default function AdminManageCourses() {
  const [courses, setCourses] = useState(dummyCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddCourse = () => {
    setSelectedCourse(null);
    setShowForm(true);
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    setShowForm(true);
  };

  const handleDeleteCourse = (name) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(prev => prev.filter(course => course.name !== name));
    }
  };

  const handleSaveCourse = (newCourse) => {
    setCourses(prev => {
      const exists = prev.find(c => c.name === newCourse.name);
      return exists
        ? prev.map(c => c.name === newCourse.name ? newCourse : c)
        : [...prev, newCourse];
    });
  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-manager">
      <h2>Manage Courses</h2>

      <div className="toolbar">
        <div className="filters">
          <input
            type="text"
            placeholder="Search by course name..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <button className="add-user" onClick={handleAddCourse}>+ Add Course</button>
      </div>

      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Sub Courses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course, idx) => (
            <tr key={idx}>
              <td>{course.name}</td>
              <td>{course.subCourses?.join(', ')}</td>
              <td>
                <div className="action-buttons">
                  <button className="update-user" onClick={() => handleEditCourse(course)}>Edit</button>
                  <button className="delete-user" onClick={() => handleDeleteCourse(course.name)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <CourseFormModal
          course={selectedCourse}
          onClose={() => setShowForm(false)}
          onSave={handleSaveCourse}
        />
      )}
    </div>
  );
}
