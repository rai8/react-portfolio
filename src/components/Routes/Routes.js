import React from "react"
import { Switch, Route } from "react-router-dom"
import LandingPage from "../LandingPage/LandingPage"
import Projects from "../Projects/Projects"
import Resume from "../Resume/Resume"
import About from "../AboutMe/About"
import Contact from "../Contact/Contact"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contacts" component={Contact} />
    </Switch>
  )
}

export default Routes
