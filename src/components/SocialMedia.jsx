import React from 'react';

const SocialMedia = () => {
    return (
        <section className="social-media">
            <a
                className="facebook icon"
                href="https://www.facebook.com/profile.php?id=61558180536381"
                target="_blank"
            >
                <i className="fab fa-facebook-f"></i>
            </a>
            <div className="sm-divider"></div>
            <a
                className="twitter icon"
                href="https://x.com/Adetomiwax22"
                target="_blank"
            >
                <i className="fab fa-twitter"></i>
            </a>
            <div className="sm-divider"></div>
            <a className="instagram icon" href="" target="_blank">
                <i className="fab fa-instagram"></i>
            </a>
        </section>
    );
};

export default SocialMedia;
