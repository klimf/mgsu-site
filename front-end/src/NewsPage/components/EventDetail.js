import React, { Component, PropTypes } from 'react';

class NewsDetail extends Component {

    componentWillMount() {
        this.props.EventsManager.getDetail(this.props.match.params.eventId);
    }

    componentDidUpdate() {
        if (this.props.events.error) {
            this.props.history.push('/404');
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.events.title}</h1>
            </div>
        )
    }
}


export default NewsDetail
