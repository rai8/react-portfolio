import React from "react"
import { Layout, Header, Navigation, Content, Drawer } from "react-mdl"
import { Link } from "react-router-dom"

import "./App.css"
import Routes from "./components/Routes/Routes"

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Title" scroll>
          <Navigation>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Routes />
        </Content>
      </Layout>
    </div>
  )
}

export default App
