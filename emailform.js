import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vebxhwb', 'template_isvae6w', formRef.current, 'YsmHHBnRlIwnHETvg')
      .then((result) => {
        alert('전송되었습니다!');
      }, (error) => {
        alert('전송 실패');
      });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} style={styles.form}>
      <input type="text" name="user_name" placeholder="이름" required style={styles.input} />
      <input type="email" name="user_email" placeholder="이메일" required style={styles.input} />
      <textarea name="message" placeholder="내용을 입력하세요" required style={styles.textarea}></textarea>
      <button type="submit" style={styles.button}>보내기</button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.8rem',
    fontSize: '1rem',
    height: '150px',
  },
  button: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '0.8rem',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
  },
};

export default EmailForm;
