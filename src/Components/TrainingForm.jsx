// Components/TrainingForm.jsx
import React, { useState, useEffect } from 'react';

const TrainingForm = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedCourse: ''
  });

  useEffect(() => {
    // Fetch courses from the database (mocked example)
    // Replace with actual API call to your Azure SQL Database
    fetch('https://your-api-endpoint/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  return (
    <section style={formStyles.container}>
      <h2 style={formStyles.title}>Training Form</h2>
      <form onSubmit={handleSubmit} style={formStyles.form}>
        <label style={formStyles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={formStyles.input}
          />
        </label>
        <label style={formStyles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={formStyles.input}
          />
        </label>
        <label style={formStyles.label}>
          Select Course:
          <select
            name="selectedCourse"
            value={formData.selectedCourse}
            onChange={handleChange}
            required
            style={formStyles.select}
          >
            <option value="">Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course.id}>{course.name}</option>
            ))}
          </select>
        </label>
        <button type="submit" style={formStyles.button}>Submit</button>
      </form>
    </section>
  );
};

const formStyles = {
  container: {
    padding: '2rem',
    backgroundColor: '#FDF7F0',
    maxWidth: '600px',
    margin: '0 auto'
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.5rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#4E567E',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }
};

export default TrainingForm;
