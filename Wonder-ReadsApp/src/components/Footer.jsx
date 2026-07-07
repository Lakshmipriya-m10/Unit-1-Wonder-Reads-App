import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <p>© 2026 Wonder Reads App. All rights reserved.</p>
                      <div className="social-icons">
                             <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                            </a>
                             <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>

            </footer>
        </div>
    );
};

export default Footer;
