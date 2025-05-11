import React from 'react'

const Features = () => {
  return (
    <div>
      <section className="features-highlight">
        <div className="container">
          <div className="feature-card">
            <div className="feature-content">
              <h2>Boost Productivity</h2>
              <p>
                Build an atmosphere that creates productivity in your
                organization and your company culture.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="check-icon">✓</span> Maximize productivity
                  and growth
                </li>
                <li>
                  <span className="check-icon">✓</span> Speed past your
                  competition
                </li>
                <li>
                  <span className="check-icon">✓</span> Learn the top techniques
                </li>
              </ul>
            </div>
            <div className="feature-image">
              <div className="image-container yellow-bg">
                <div className="astronaut-image"></div>
              </div>
            </div>
          </div>

          <div className="feature-card reverse">
            <div className="feature-content">
              <h2>Automated Tasks</h2>
              <p>
                Save time and money with our revolutionary services. We are the
                leaders in the industry.
              </p>
              <ul className="feature-list">
                <li>
                  <span className="check-icon">✓</span> Automated task
                  management workflow
                </li>
                <li>
                  <span className="check-icon">✓</span> Detailed analytics for
                  your data
                </li>
                <li>
                  <span className="check-icon">✓</span> Some awesome
                  integrations
                </li>
              </ul>
            </div>
            <div className="feature-image">
              <div className="image-container yellow-bg">
                <div className="automation-image"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid" id="features">
        <div className="container">
          <h2 className="section-title">Our Features</h2>
          <p className="section-subtitle">
            Check out our list of awesome features below.
          </p>

          <div className="grid">
            <div className="feature-box">
              <div className="feature-icon blue">C</div>
              <h3>Certifications</h3>
              <p>
                Each of our plan will provide you and your team with
                certifications.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon blue">N</div>
              <h3>Notifications</h3>
              <p>
                Send out notifications to all your customers to keep them
                engaged.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon blue">B</div>
              <h3>Bundles</h3>
              <p>High quality bundles of awesome tools to help you out.</p>
            </div>

            <div className="feature-box">
              <div className="feature-icon blue">D</div>
              <h3>Developer Tools</h3>
              <p>
                Developer tools to help grow your application and keep it
                up-to-date.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon blue">B</div>
              <h3>Building Blocks</h3>
              <p>
                The right kind of building blocks to take your company to the
                next level.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon blue">C</div>
              <h3>Coupons</h3>
              <p>
                Coupons system to provide special offers and discounts for your
                app.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features
