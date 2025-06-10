import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>© 2025 Jihyun Kim. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#ececec',
        color: '#b0b0b0',
        padding: '1rem',
    }
};

export default Footer;