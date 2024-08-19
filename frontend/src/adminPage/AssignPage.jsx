// AssignPage.js

import React, { useState } from 'react';
import './AssignPage.css';

const AssignPage = () => {
  
  const [subjectName, setSubjectName] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [facultyId, setFacultyId] = useState('');
  const [facultyEmail, setFacultyEmail] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log('Submitted:', { subjectName, subjectId, facultyName, facultyId, facultyEmail, dueDate });

    const response = await fetch('/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ subjectName, subjectId, facultyName, facultyId, facultyEmail, dueDate }),
    });

    if (response.ok) {
      console.log('Assignment submitted successfully');
      // Optionally, you can reset the form fields here
    } else {
      console.error('Failed to submit assignment');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Subject Name:
            <input
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
            />
          </label>
          
          <label>
            Subject ID:
            <input
              type="text"
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
            />
          </label>
          
          <label>
            Faculty Name:
            <input
              type="text"
              value={facultyName}
              onChange={(e) => setFacultyName(e.target.value)}
            />
          </label>
          <label>
            Faculty ID:
            <input
              type="text"
              value={facultyId}
              onChange={(e) => setFacultyId(e.target.value)}
            />
          </label>
          <label>
            Faculty Email ID:
            <input
              type="email"
              value={facultyEmail}
              onChange={(e) => setFacultyEmail(e.target.value)}
            />
          </label>
          <label>
            Due Date:
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </label>
   
          <button type="submit">Assign</button>
        </form>

      </div>
    </div>
  );
};

export default AssignPage;
