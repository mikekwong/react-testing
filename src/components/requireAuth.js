import React, { Component } from 'react'
import { connect } from 'react-redux'

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway()
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    shouldNavigateAway() {
      // once signed out state changes, redirect to root
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    // spread this.props to pass down action creators or whichever props we receive from parent component down to component
    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    const { auth } = state
    return { auth }
  }

  return connect(mapStateToProps)(ComposedComponent)
}
