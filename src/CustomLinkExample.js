import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const CustomLinkExample = () => (
  <Router>
    <div>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home"></OldSchoolMenuLink>
      <OldSchoolMenuLink to="/about" label="About"></OldSchoolMenuLink>
      <hr/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

/*
* children
* 与component、render都是用来渲染组件的,但是children不论路由是否匹配都会渲染
* */
const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
    <div className={match ? 'active':''}>
      {match ? '>' : ''}<Link to={to}>{label}</Link>
    </div>
  )}></Route>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default CustomLinkExample;