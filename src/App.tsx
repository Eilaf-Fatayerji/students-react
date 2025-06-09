
import React, { useState } from 'react';

type Student = {
  name: string;
  level: number;
  average: number;
};

const studentsData: Student[] = [
  { name: 'Aiden Carter', level: 1, average: 88 },
  { name: 'Bella Thompson', level: 2, average: 91 },
  { name: 'Caleb Johnson', level: 3, average: 91 },
  { name: 'Daisy Nguyen', level: 3, average: 93 },
  { name: 'Ethan Wright', level: 1, average: 76 },
  { name: 'Gavin Lopez', level: 3, average: 95 },
  { name: 'Hannah Patel', level: 2, average: 95 },
  { name: 'Isaac Chen', level: 2, average: 87 },
];

function App() {
  const [selectedLevel, setSelectedLevel] = useState('All');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(event.target.value);
  };

  const filteredStudents = selectedLevel === 'All'
    ? studentsData
    : studentsData.filter((student) => student.level.toString() === selectedLevel);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2>Students Overview</h2>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="levelFilter">Filter by level </label>
        <select id="levelFilter" onChange={handleFilterChange} value={selectedLevel}>
          <option value="All">All Levels</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </select>
      </div>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Level</th>
            <th style={thStyle}>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td style={tdStyle}>{student.name}</td>
              <td style={tdStyle}>{student.level}</td>
              <td style={tdStyle}>{student.average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  backgroundColor: '#f9f9f9',
  textAlign: 'left' as const,
};

const tdStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'left' as const,
};

export default App;