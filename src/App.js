import React, { Component } from 'react'
import { connect } from 'react-redux'
import './containers/App.css'
import { User } from './components/User'
import { Page } from './components/Page'
import { setYear } from './actions/PageActions'
class App extends Component {
  render() {
    const { user, page, setYearAction } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My photo top</h1>
        </header>
        <p className="App-intro">There my the most popular photos</p>
        <User name={user.name} />
        <Page year={page.year} photos={page.photos} setYear={setYearAction} />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
