import React from "react";

const Team = () => {
  return (
    <div>
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2>An incredible team of amazing individuals</h2>
          </div>

          <div className="team-grid">
            {/* Row 1 */}
            <div className="team-member">
              <div className="member-avatar yellow-bg"></div>
              <h3>Freddy Smith</h3>
              <p>CEO and Founder</p>
              <div className="social-icons">
                <span>T</span>
                <span>F</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar green-bg"></div>
              <h3>Carl Jones</h3>
              <p>CTO and Co-Founder</p>
              <div className="social-icons">
                <span>T</span>
                <span>F</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar pink-bg"></div>
              <h3>Susan Peterson</h3>
              <p>Marketing Directory</p>
              <div className="social-icons">
                <span>T</span>
                <span>F</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar blue-bg"></div>
              <h3>Tommy Barnes</h3>
              <p>Designer</p>
              <div className="social-icons">
                <span>T</span>
                <span>F</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="team-member">
              <div className="member-avatar yellow-bg"></div>
              <h3>Ron Jenson</h3>
              <p>Senior Developer</p>
              <div className="social-icons">
                <span>T</span>
                <span>F</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar green-bg"></div>
              <h3>Pete Tompkins</h3>
              <p>Web Developer</p>
              <div className="social-icons">
                <span>T</span>
                <span>F</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar pink-bg"></div>
              <h3>Kelly Richards</h3>
              <p>Sales Manager</p>
              <div className="social-icons">
                <span>T</span>
                <span>F</span>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar blue-bg"></div>
              <h3>Alexis Jordan</h3>
              <p>Affiliate Manager</p>
              <div className="social-icons">
                <span>T</span>
                <span>F</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
