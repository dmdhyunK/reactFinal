import React, { useEffect, useState } from 'react';
import design from './picture/design.png';
import design2 from './picture/design2.png';
import design3 from './picture/design3.png';
import design4 from './picture/design4.png';
import design5 from './picture/design5.png';
import design6 from './picture/design6.png';
import design7 from './picture/design7.png';
import design8 from './picture/design8.png';
import design9 from './picture/design9.png';

const references = [
  { id: 1, src: design },
  { id: 2, src: design2 },
  { id: 3, src: design3 },
  { id: 4, src: design4 },
  { id: 5, src: design5 },
  { id: 6, src: design6 },
  { id: 7, src: design7 },
  { id: 8, src: design8 },
  { id: 9, src: design9 },
];

const lockedIds = [1, 2];
const STORAGE_KEY = "likedImagesMap";

const Like = () => {
  const [likedMap, setLikedMap] = useState({});
  const [unlockedIds, setUnlockedIds] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setLikedMap(JSON.parse(saved));
    }
    const savedUnlocked = localStorage.getItem("unlockedImageIds");
    if (savedUnlocked) {
      setUnlockedIds(JSON.parse(savedUnlocked));
    }
  }, []);

  const likedImages = references.filter((img) => likedMap[String(img.id)]);

  const handleImageClick = (img) => {
    const isLocked = lockedIds.includes(img.id) && !unlockedIds.includes(img.id);
    if (isLocked) {
      const password = prompt("잠긴 작품입니다. 비밀번호를 입력하세요:");
      if (password === "0462") {
        setUnlockedIds((prev) => [...prev, img.id]);
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>좋아요한 작품</h1>
      {likedImages.length === 0 ? (
        <p style={styles.noResult}>❤️ 좋아요한 작품이 없습니다.</p>
      ) : (
        <div style={styles.grid}>
          {likedImages.map((img) => {
            const isLocked = lockedIds.includes(img.id) && !unlockedIds.includes(img.id);
            return (
              <div key={img.id} style={styles.imageCard} onClick={() => handleImageClick(img)}>
                <img
                  src={img.src}
                  alt={`liked-${img.id}`}
                  style={{
                    ...styles.image,
                    filter: isLocked ? 'blur(10px)' : 'none',
                    cursor: 'pointer',
                  }}
                />
                {isLocked && <span style={styles.lockIcon}>🔒</span>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    padding: '3rem 2rem',
    fontFamily: "'Helvetica Neue', sans-serif",
    color: '#1a1816',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  noResult: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: '#777',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  imageCard: {
    position: 'relative',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    aspectRatio: '1',
    objectFit: 'cover',
    borderRadius: '6px',
    border: '2px solid #ccc',
  },
  lockIcon: {
    position: 'absolute',
    top: '8px',
    left: '10px',
    fontSize: '1.4rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    padding: '0.2rem 0.4rem',
  },
};

export default Like;
