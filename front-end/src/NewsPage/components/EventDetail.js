import React, { Component, PropTypes } from 'react';
import {withRouter} from 'react-router'

class NewsDetail extends Component {

    componentWillMount() {
        this.props.EventsDetailManager.getDetail(this.props.match.params.eventId);
    }

    componentDidUpdate() {
        if (this.props.eventDetail.error) {
            this.props.history.push('/404');
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.eventDetail.data.title}</h1>
            </div>
        )
    }
}


export default withRouter(NewsDetail);
