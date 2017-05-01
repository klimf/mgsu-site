import React, { Component, PropTypes } from 'react'

const propTypes = {}

const defaultProps = {}

class Donators extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Благотвориетли</h1>
            </div>
        )
    }
}

Donators.propTypes = propTypes

Donators.defaultProps = defaultProps

export default Donators
