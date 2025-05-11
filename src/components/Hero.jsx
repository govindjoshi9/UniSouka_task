import './Hero.css'
const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>
              Start Crafting Your <br />
              <span className="text-purple">Next Great Idea</span>
            </h1>
            <p>
              Simplifying the creation of landing pages, blog posts, <br />
              application pages and so much more.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary">Purchase Now</button>
              <button className="btn-text">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-section">
        <div className="container">
          <h4 className="trusted-title">TRUSTED BY TOP LEADING COMPANIES</h4>
          <div className="logo-grid">
            <div className="logo-item">Disney</div>
            <div className="logo-item">Google</div>
            <div className="logo-item">HubSpot</div>
            <div className="logo-item">YouTube</div>
            <div className="logo-item">Slack</div>
            <div className="logo-item">Shopify</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero
