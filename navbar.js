import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <ul style={styles.menu}>
                    <li><Link to="/about" style={styles.link}>About</Link></li>
                    <li><Link to="/projects" style={styles.link}>Projects</Link></li>
                    <li><Link to="/skills" style={styles.link}>Skills</Link></li>
                    <li><Link to="/archive" style={styles.link}>Archive</Link></li>
                    <li><Link to="/process" style={styles.link}>Process</Link></li>
                    <li><Link to="/like" style={styles.link}>Likes</Link></li>
                    <li>
                        <a
                            href="/resume.pdf"
                            download
                            style={{
                                ...styles.link,
                                fontWeight: 'bold',
                            }}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
                <Link to="/" style={styles.hmm}>Hmm</Link>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: '#ececec',
        color: '#1d1b18',
    },
    container: {
        margin: '20px auto',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        padding: '0 2rem',
    },
    menu: {
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        margin: 0,
        padding: 10,
    },
    link: {
        textDecoration: 'none',
        color: '#1d1b18',
        fontSize: '1rem',
        fontWeight: '500',
    },
    hmm: {
        fontSize: '1rem',
        textDecoration: 'none',
        color: '#1d1b18',
        fontWeight: '300',
        fontStyle: 'italic',
    },
};

export default Navbar;
