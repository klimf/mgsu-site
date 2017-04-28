import React, { Component, PropTypes } from 'react'


const propTypes = {}

const defaultProps = {}

class Docs extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Docs section</h1>
            </div>
        )
    }
}

Docs.propTypes = propTypes

Docs.defaultProps = defaultProps

export default Docs
