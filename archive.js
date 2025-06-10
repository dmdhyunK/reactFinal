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

const Archive = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedMap, setLikedMap] = useState({});
  const [unlockedIds, setUnlockedIds] = useState([]);

  useEffect(() => {
    const savedLikes = localStorage.getItem(STORAGE_KEY);
    if (savedLikes) {
      setLikedMap(JSON.parse(savedLikes));
    }

    const savedUnlocked = localStorage.getItem("unlockedImageIds");
    if (savedUnlocked) {
      setUnlockedIds(JSON.parse(savedUnlocked));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(likedMap));
  }, [likedMap]);

  useEffect(() => {
    localStorage.setItem("unlockedImageIds", JSON.stringify(unlockedIds));
  }, [unlockedIds]);

  const toggleLike = (id) => {
    const idStr = String(id);
    setLikedMap(prev => ({
      ...prev,
      [idStr]: !prev[idStr],
    }));
  };

  const handleImageClick = (img) => {
    const isLocked = lockedIds.includes(img.id) && !unlockedIds.includes(img.id);
    if (isLocked) {
      const password = prompt("잠긴 작품입니다. 비밀번호를 입력하세요:");
      if (password === "0462") {
        setUnlockedIds(prev => [...prev, img.id]);
        setSelectedImage(img.src);
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    } else {
      setSelectedImage(img.src);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Archive</h1>

      <div style={styles.gridContainer}>
        <div style={styles.references}>
          {references.map((img) => {
            const isLocked = lockedIds.includes(img.id) && !unlockedIds.includes(img.id);
            return (
              <div key={img.id} style={styles.imageCard} onClick={() => handleImageClick(img)}>
                <img
                  src={img.src}
                  alt={`ref-${img.id}`}
                  style={{
                    ...styles.refImg,
                    filter: isLocked ? 'blur(10px)' : 'none',
                  }}
                />
                {isLocked && <span style={styles.lockIcon}>🔒</span>}
                <span
                  style={{
                    ...styles.heartIcon,
                    color: likedMap[String(img.id)] ? 'red' : '#999',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(img.id);
                  }}
                >
                  {likedMap[String(img.id)] ? '♥' : '♡'}
                </span>
              </div>
            );
          })}
        </div>

        <div style={styles.keyImageSection}>
          {selectedImage && (
            <div style={styles.resizableBox}>
              <img src={selectedImage} alt="Main Visual" style={styles.keyImage} />
            </div>
          )}
        </div>

        <div style={styles.styleCards}>
          <div style={styles.card}><h3>Color</h3><p>#ececec, #f5eecb, #1d1b18</p></div>
          <div style={styles.card}><h3>Typography</h3><p>Helvetica</p></div>
          <div style={styles.card}><h3>Texture</h3><p>paper, grain</p></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f1f1f1',
    padding: '3rem 2rem',
    fontFamily: "'Helvetica Neue', sans-serif",
    color: '#1a1816',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gap: '2rem',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  references: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  },
  imageCard: {
    position: 'relative',
  },
  refImg: {
    width: '100%',
    aspectRatio: '1',
    objectFit: 'cover',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  heartIcon: {
    position: 'absolute',
    bottom: '8px',
    right: '10px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    userSelect: 'none',
  },
  lockIcon: {
    position: 'absolute',
    top: '8px',
    left: '10px',
    fontSize: '1.4rem',
    padding: '0.2rem 0.4rem',
  },
  keyImageSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  keyImage: {
    width: '100%',
  },
  styleCards: {
    gridColumn: '1 / 3',
    display: 'flex',
    gap: '1rem',
    marginTop: '2rem',
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: '1rem',
    borderRadius: '6px',
  },
  resizableBox: {
    resize: 'both',
    overflow: 'auto',
    border: '1px solid #ccc',
    padding: '4px',
    width: '100%',
    maxWidth: '100%',
    minWidth: '150px',
    minHeight: '150px',
  },
};

export default Archive;
