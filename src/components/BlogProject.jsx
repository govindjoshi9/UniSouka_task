import React from 'react'

const BlogProject = () => {
  return (
    <div>
      <section className="blog-section" id="blog">
        <div className="container">
          <div className="blog-header">
            <h2>The Project Blog</h2>
            <p>Designs and layouts to help you with your app.</p>
          </div>

          <div className="blog-grid">
            {/* Row 1 */}
            <div className="blog-card">
              <div className="blog-image purple-bg"></div>
              <div className="blog-content">
                <span className="category">Design</span>
                <h3>Refreshing Designs</h3>
                <p>
                  Quench satisfying designs to help you stir up emotion and tell
                  a story.
                </p>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image blue-bg"></div>
              <div className="blog-content">
                <span className="category">Lifestyle</span>
                <h3>Healthier Lifestyle</h3>
                <p>
                  Living a healthier lifestyle will help with your productivity
                  and happiness.
                </p>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image yellow-bg"></div>
              <div className="blog-content">
                <span className="category">Entertainment</span>
                <h3>Gaming Evolution</h3>
                <p>
                  Learn about the evolution of gaming and how it started a
                  revolution.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="blog-card">
              <div className="blog-image dark-bg"></div>
              <div className="blog-content">
                <h3>Best Workstations of the Year</h3>
                <p>
                  Check out these inspiring workstations to get ideas for your
                  own.
                </p>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image light-bg"></div>
              <div className="blog-content">
                <h3>Eating for Productivity</h3>
                <p>
                  Learn how to be more disciplined in your diet and how you can
                  eat to maximize productivity.
                </p>
              </div>
            </div>

            <div className="blog-card">
              <div className="blog-image orange-bg"></div>
              <div className="blog-content">
                <h3>A Design Mind-set</h3>
                <p>
                  What does it mean to have a design mind-set? Learn how to
                  improve your eye for design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogProject
