import React, { Component, PropTypes } from 'react';

class NewsDetail extends Component {

    componentWillMount() {
        this.props.NewsManager.getDetail(this.props.match.params.newsId);
    }

    componentDidUpdate() {
        if (this.props.news.error) {
            this.props.history.push('/404');
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.news.title}</h1>
            </div>
        )
    }
}


export default NewsDetail
