import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <div className="link-group">
              <a href="#about">About</a>
              <a href="#blog">Blog</a>
              <a href="#team">Team</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
              <a href="#terms">Terms</a>
            </div>

            <div className="social-links">
              <a href="#facebook">F</a>
              <a href="#twitter">T</a>
              <a href="#instagram">I</a>
              <a href="#linkedin">L</a>
              <a href="#youtube">Y</a>
            </div>
          </div>

          <div className="copyright">
            <p>© 2025 notifcation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
