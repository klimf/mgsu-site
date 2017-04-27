import React, { Component, PropTypes } from 'react'
import style from './style.css'

const propTypes = {}

const defaultProps = {}

class AdminSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/donators`}></Link>
                    </li>
                </ul>
               
            </div>
        )
    }
}

AdminSection.propTypes = propTypes

AdminSection.defaultProps = defaultProps

export default AdminSection
