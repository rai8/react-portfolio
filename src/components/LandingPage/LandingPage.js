import React from "react"
import { Grid, Cell } from "react-mdl"
import "./landingPage.css"
import image from "./image.png"

const LandingPage = () => {
  return (
    <div style={container}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <div className="img-container">
            <img src={image} alt="avatar" className="avatar-img" />
          </div>
          <div className="banner-text">
            <h1>Software Developer and Pen-Tester</h1>
            <hr />
            <p>HTML/CSS | Javascript | React | React Native | NodeJS/Express</p>
            <p>Network | Server (Windows/Linux) Administration</p>
            <p>Penetration Testing | CEH</p>
            <div className="social-links">
              <a
                href="github.com/rai8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square" aria-hidden="true" />
              </a>
              <a
                href="freecodecamp.org/rai8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-free-code-camp" aria-hidden="true" />
              </a>
              <a
                href="freecodecamp.org/rai8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  )
}

const container = {
  width: "100%",
  margin: "auto",
}

export default LandingPage
