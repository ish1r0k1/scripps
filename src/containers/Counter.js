import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../actions/counter'

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.object.isRequired
  }

  handleDecrement() {
    this.props.actions.decrement()
  }

  handleIncrement() {
    this.props.actions.increment()
  }

  handleIncrementAsync() {
    this.props.actions.incrementAsync()
  }

  render() {
    const { counter } = this.props

    return (
      <div>
        <div>{counter}</div>
        <div>
          <button onClick={() => {
            this.handleDecrement()
          }}>-</button>
          <button onClick={() => {
            this.handleIncrement()
          }}>+</button>
          <button onClick={() => {
            this.handleIncrementAsync()
          }}>+ Async</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
