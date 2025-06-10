import React from 'react';

const processes = [
  {
    title: '청소년 행사 기획',
    steps: [
      { label: '프로젝트 개요', content: '청소년 대상 문화 체험 행사를 기획' },
      { label: '문제 접근', content: '흥미 유발 부족, 목적이 불분명 → 타겟 리서치 및 프로그램 재구성, 스토리보드 제작' },
      { label: '결과', content: '참여율 상승, 행사 만족도 조사에서 긍정 응답 87% 달성' },
    ],
  },
  {
    title: '3D 오브젝트 디자인',
    steps: [
      { label: '프로젝트 개요', content: '블렌더를 활용한 디자인 작업' },
      { label: '문제 접근', content: '복잡한 모델링 & 렌더링 기법 습득 → 레퍼런스 분석 및 튜토리얼 반복 적용' },
      { label: '결과', content: '입체감과 조명 표현의 완성도 향상. 렌더링 품질 업그레이드' },
    ],
  },
  {
    title: 'Visual Studio Code',
    steps: [
      { label: '프로젝트 개요', content: 'React 기반 인터랙티브 포트폴리오 구현' },
      { label: '문제 접근', content: '상태관리 오류, 디버깅 어려움 → 컴포넌트 분리, 상태 흐름 시각화' },
      { label: '결과', content: '주요 에러 해결' },
    ],
  },
];

const Process = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Project Process</h1>

      <div style={styles.projectRow}>
        {processes.map((proj, idx) => (
          <div key={idx} style={styles.projectColumn}>
            <h2 style={styles.projectTitle}>{proj.title}</h2>
            {proj.steps.map((step, stepIdx) => (
              <div key={stepIdx} style={styles.stepCard}>
                <h3 style={styles.stepTitle}>{step.label}</h3>
                <p style={styles.stepText}>{step.content}</p>
              </div>
            ))}
          </div>
        ))}
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
    color: '#1a1816',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '3rem',
  },
  projectRow: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  projectColumn: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  projectTitle: {
    fontSize: '1.25rem',
    textAlign: 'center',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid #b0b0b0',
  },
  stepCard: {
    borderRadius: '6px',
    padding: '1rem',
    backgroundColor: '#ffffff',
  },
  stepTitle: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  stepText: {
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#444',
  },
};

export default Process;
