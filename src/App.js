import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}
  // eslint-disable-next-line
  onToggleShowContent = event => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }
  // eslint-disable-next-line
  onToggleShowLeftNavbar = event => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }
  // eslint-disable-next-line
  onToggleShowRightNavbar = event => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showRightNavbar, showLeftNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
