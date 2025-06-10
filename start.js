import React from 'react';
import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.wrapper}>
      <div style={styles.grid}>
        {Array(6).fill(0).map((_, idx) => (
          <div
            key={idx}
            style={{
              ...styles.card,
              cursor: idx === 2 ? 'pointer' : 'default',
              backgroundColor: idx === 2 ? '#f5eecb' : '#fff',
            }}
            onClick={() => {
              if (idx === 2) navigate('/home');
            }}
          >
            {idx === 2 && <span style={styles.centerText}>Click profile</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#f1f1f1',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    width: '80%',
    maxWidth: '1000px',
  },
  card: {
    aspectRatio: '1',
    border: '1px solid #aaa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  centerText: {
    fontSize: '1.2rem',
    color: '#1d1b18',
  },
};

export default Start;
