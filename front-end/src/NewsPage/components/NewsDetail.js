import React, { Component, PropTypes } from 'react';
import {withRouter} from 'react-router';
import {resolveStatic} from '../../common/helpers'


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
             {this.props.newsDetail.data && 
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <h1 className="small-12 uppercase center columns">{this.props.newsDetail.data.title}</h1>
                    <p className="small-12 center columns">
                       {this.props.newsDetail.data.description}
                    </p>
                    <div className="small-12 columns">
                        {this.props.newsDetail.data.img &&
                        <img src={resolveStatic(this.props.newsDetail.data.img.original)} alt=""/>
                        }
                    </div>
                    <p className="small-12 center columns" dangerouslySetInnerHTML={{__html: this.props.newsDetail.data.content}}>
                    </p>
                </div>
                <div className="small-12 space-3 columns"/>
            </div>
             }
        </div>
        )
    }
}


export default withRouter(NewsDetail)
