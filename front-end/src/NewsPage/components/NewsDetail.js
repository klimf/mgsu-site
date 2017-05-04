import React, { Component, PropTypes } from 'react';
import {withRouter} from 'react-router'


class NewsDetail extends Component {

    componentWillMount() {
         
        this.props.NewsDetailManager.getDetail(this.props.match.params.newsId);
    }

    componentDidUpdate() {
        if (this.props.newsDetail.error) {
            this.props.history.push('/404');
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.newsDetail.data.title}</h1>
            </div>
        )
    }
}


export default withRouter(NewsDetail)
