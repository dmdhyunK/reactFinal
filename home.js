import React from 'react';
import { Link } from 'react-router-dom';

const tabs = ['About', 'Projects', 'Skills', 'Archive', 'Process'];

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome</h1>

      <div style={styles.tabRow}>
        {tabs.map((tab, idx) => (
          <Link
            key={tab}
            to={`/${tab.toLowerCase()}`}
            style={{
              ...styles.tab,
              marginTop: `${(tabs.length - 1 - idx) * 8}px`,
              zIndex: idx + 1,
            }}
          >
            {tab}
          </Link>
        ))}
      </div>

      <div style={styles.grayBox}>
        <div style={styles.innerBox} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f1f1f1',
    minHeight: '100vh',
    padding: '3rem 2rem',
    fontFamily: "'Helvetica Neue', sans-serif",
    color: '#1d1b18',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '3rem',
  },
  tabRow: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
    height: '60px',
  },
  tab: {
    backgroundColor: '#fff',
    border: '1px solid #aaa',
    padding: '0.5rem 1.5rem',
    borderTopLeftRadius: '6px',
    borderTopRightRadius: '6px',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    textDecoration: 'none',
    color: '#1a1816',
    transition: 'all 0.2s ease',
    position: 'relative',
  },
  grayBox: {
    width: '40%',
    height: '450px',
    backgroundColor: '#dcdcdc',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',      
    justifyContent: 'flex-start', 
    paddingLeft: '3rem',       
  },
  
  innerBox: {
    width: '60px',
    height: '200px',
    backgroundColor: '#bbb',
  },
};

const addHoverStyle = () => {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    a:hover {
      background-color: #b0b0b0 !important;
      color: #1d1b18 !important;
    }
  `;
  document.head.appendChild(styleTag);
};
addHoverStyle();

export default Home;
