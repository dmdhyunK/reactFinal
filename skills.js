import React, { useState } from 'react';
import adobe from './picture/adobe.png';
import plan from './picture/plan.jpg';
import code from './picture/code.jpg';

const skillsData = {
  디자인: {
    icon: adobe,
    level: 70,
    description: '어도비를 활용한 디자인 및 레이아웃 표현',
  },
  기획: {
    icon: plan,
    level: 80,
    description: '웹 구조 기획 및 사용자 플로우 맵 제작 경험',
  },
  프로그래밍: {
    icon: code,
    level: 65,
    description: 'JS/React를 활용한 동적 웹 페이지 및 사용자 흐름 구현 ',
  },
};

const Skills = () => {
  const [selected, setSelected] = useState('디자인');

  const current = skillsData[selected];

  return (
    <div style={styles.container}>
      <div style={styles.iconSection}>
        {Object.keys(skillsData).map((cat) => (
          <div key={cat} style={styles.iconBox} onClick={() => setSelected(cat)}>
            <img
              src={skillsData[cat].icon}
              alt={cat}
              style={{
                ...styles.icon,
                opacity: selected === cat ? 1 : 0.5,
                transform: selected === cat ? 'scale(1.1)' : 'scale(1)',
              }}
            />
            <p style={styles.label}>{cat}</p>
          </div>
        ))}
      </div>
      <div style={styles.contentArea}>
        <div style={styles.levelBarWrap}>
          <div style={styles.levelBarOuter}>
            <div style={{ ...styles.levelBarInner, width: `${current.level}%` }} />
          </div>
          <p style={styles.levelText}>Level: {current.level}</p>
        </div>

        <div style={styles.descriptionBox}>
          <h3>{selected}</h3>
          <p>{current.description}</p>
        </div>
      </div>
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
  iconSection: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  iconBox: {
    textAlign: 'center',
    cursor: 'pointer',
  },
  icon: {
    width: '64px',
    height: '64px',
    transition: '0.3s',
  },
  label: {
    marginTop: '0.5rem',
    fontSize: '0.95rem',
  },
  contentArea: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '2rem',
    alignItems: 'flex-start',
  },
  levelBarWrap: {
    flex: '1',
  },
  levelBarOuter: {
    backgroundColor: '#eee',
    height: '12px',
    borderRadius: '6px',
    overflow: 'hidden',
    marginBottom: '0.5rem',
  },
  levelBarInner: {
    backgroundColor: '#b0b0b0',
    height: '100%',
  },
  levelText: {
    fontSize: '0.9rem',
    color: '#555',
  },
  descriptionBox: {
    flex: '1',
    backgroundColor: '#f8f8f8',
    padding: '1rem',
    borderRadius: '8px',
  },
  footer: {
    borderTop: '1px solid #ccc',
    marginTop: '4rem',
    paddingTop: '1rem',
    textAlign: 'center',
    color: '#888',
  },
};

export default Skills;
