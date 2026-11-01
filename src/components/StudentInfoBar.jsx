import React, { useState, useEffect } from 'react';
import { UserCheck, Edit3 } from 'lucide-react';

export default function StudentInfoBar() {
  const [studentInfo, setStudentInfo] = useState(() => {
    const saved = localStorage.getItem('nutripoha_student_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fall through
      }
    }
    return {
      name: '',
      rollNo: '',
      department: '',
      college: '',
      academicYear: '',
    };
  });

  const handleChange = (field, value) => {
    const updated = { ...studentInfo, [field]: value };
    setStudentInfo(updated);
    localStorage.setItem('nutripoha_student_info', JSON.stringify(updated));
  };

  return (
    <section className="student-bar-section" aria-label="Student and Academic Submission Details">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <UserCheck size={18} color="var(--primary-sage)" />
          <span style={{ fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)' }}>
            Academic Assignment Submission Metadata
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Edit3 size={13} /> (Click any field to edit)
          </span>
        </div>

        <div className="student-card-grid">
          <div className="student-field">
            <label className="student-label" htmlFor="student-name">Student Name</label>
            <input
              id="student-name"
              type="text"
              className="student-input"
              value={studentInfo.name}
              placeholder="[Enter Name]"
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>

          <div className="student-field">
            <label className="student-label" htmlFor="student-roll">Roll Number</label>
            <input
              id="student-roll"
              type="text"
              className="student-input"
              value={studentInfo.rollNo}
              placeholder="[Enter Roll Number]"
              onChange={(e) => handleChange('rollNo', e.target.value)}
            />
          </div>

          <div className="student-field">
            <label className="student-label" htmlFor="student-dept">Department</label>
            <input
              id="student-dept"
              type="text"
              className="student-input"
              value={studentInfo.department}
              placeholder="[Enter Department]"
              onChange={(e) => handleChange('department', e.target.value)}
            />
          </div>

          <div className="student-field">
            <label className="student-label" htmlFor="student-college">College</label>
            <input
              id="student-college"
              type="text"
              className="student-input"
              value={studentInfo.college}
              placeholder="[Enter College Name]"
              onChange={(e) => handleChange('college', e.target.value)}
            />
          </div>

          <div className="student-field">
            <label className="student-label" htmlFor="student-year">Academic Year</label>
            <input
              id="student-year"
              type="text"
              className="student-input"
              value={studentInfo.academicYear}
              placeholder="[Enter Academic Year]"
              onChange={(e) => handleChange('academicYear', e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
