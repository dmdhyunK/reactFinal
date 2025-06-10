import React, { useState } from 'react';
import design2 from './picture/design2.png';
import design5 from './picture/design5.png';
import codeproject from './picture/codeproject.png';

const projectList = [
  { id: 1, category: 'Plan', title: 'Product planning', thumbnail: design2, description: '굿즈 기획 프로젝트' },
  { id: 2, category: 'Design', title: '3D design', thumbnail: design5, description: '3D 렌더링 프로젝트' },
  { id: 3, category: 'Code', title: 'Game coding', thumbnail: codeproject, description: '슈팅 게임 만들기' },
];

const categories = ['All', 'Plan', 'Design', 'Code'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = selectedCategory === 'All'
    ? projectList
    : projectList.filter(p => p.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.categoryRow}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              ...styles.categoryButton,
              backgroundColor: selectedCategory === cat ? '#b0b0b0' : '#ddd',
              color: selectedCategory === cat ? '#ddd' : 'black'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.projectGrid}>
        {filtered.map(project => (
          <div key={project.id} style={styles.card} onClick={() => openModal(project)}>
            <img
              src={project.thumbnail}
              alt={project.title}
              style={styles.thumbnail}
            />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>

      {modalOpen && selectedProject && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} style={styles.closeBtn}>X</button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.thumbnail} alt={selectedProject.title} style={{ width: '100%' }} />
            <p>{selectedProject.description}</p>
            <p><strong>카테고리:</strong> {selectedProject.category}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'sans-serif',
  },
  categoryRow: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '2rem',
  },
  categoryButton: {
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
  },
  projectGrid: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '200px',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: '#eee',
    padding: '1rem',
    borderRadius: '6px',
  },
  thumbnail: {
    width: '100%',
    borderRadius: '6px',
    objectFit: 'cover',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem',
    width: '90%',
    maxWidth: '600px',
    borderRadius: '8px',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '1rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }
};

export default Projects;
