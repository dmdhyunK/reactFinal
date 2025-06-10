import React from 'react';
import { Link } from 'react-router-dom'; 
import profile from './picture/profile.jpg'; 

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.topSection}>

        <div style={styles.profileBox}>
          <img
            src={profile}
            alt="Profile"
            style={styles.profileImage}
          />
        </div>

        <div style={styles.introBox}>
          <h2 style={styles.title}>About Me</h2>
          <p style={styles.description}>
            단계적 시스템을 중시하는 프로그래머입니다.  
            단순하고 명확한 그리드를 통해 메시지를 전달하는 것을 추구합니다.
          </p>

          <Link to="/emailform" style={styles.contactButton}>Contact</Link>
        </div>

        <div style={styles.keywordsBox}>
          <span style={styles.tag}>Visual</span>
          <span style={styles.tag}>Code</span>
          <span style={styles.tag}>System</span>
        </div>
      </div>

      <div style={styles.traitsBox}>
        <span style={styles.trait}>꼼꼼함</span>
        <span style={styles.trait}>기획력</span>
        <span style={styles.trait}>프로그래밍</span>
        <span style={styles.trait}>책과 전시</span>
        <span style={styles.trait}>다양성</span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: "'Helvetica Neue', sans-serif"
  },
  topSection: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '2rem',
    alignItems: 'flex-start',
  },
  profileBox: {
    flex: '0 0 200px',
  },
  profileImage: {
    width: '100%',
    borderRadius: '2px',
  },
  introBox: {
    flex: '1',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#333',
  },
  keywordsBox: {
    flex: '0 0 150px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  tag: {
    backgroundColor: '#f5eecb',
    color: '#1d1b18',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.85rem',
    textAlign: 'center',
  },
  traitsBox: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
  },
  trait: {
    backgroundColor: '#eee',
    padding: '0.5rem 1rem',
    fontSize: '0.85rem',
  },
  contactButton: {
    marginTop: '1rem',
    backgroundColor: '#ddd',
    padding: '0.5rem 1.2rem',
    borderRadius: '4px',
    textDecoration: 'none',
    color: '#000',
    fontSize: '0.95rem',
    display: 'inline-block',
    fontWeight: '500'
  }
};

export default About;
