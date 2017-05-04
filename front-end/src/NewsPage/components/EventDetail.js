import React, { Component, PropTypes } from 'react';
import {withRouter} from 'react-router';
import {formatEventDate} from '../../common/helpers';
import sanitizeHtml from 'sanitize-html';
import {resolveStatic} from '../../common/helpers';


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
        var date = this.props.eventDetail.data ?  formatEventDate(this.props.eventDetail.data.date) : null;
        return (
        <div>
            {this.props.eventDetail.data && 
            <div className="page row expanded">
                    <div className="small-12 space-3 columns"/>
                    <div className="content small-12 row">
                        <div className="small-12 columns">
                            <h1 className="uppercase left">{this.props.eventDetail.data.title}</h1>
                            <h2 className="uppercase right m-t-3 primary">{date.month}</h2>
                            <h1 className="uppercase right primary">{date.day}</h1>
                            <p className="left" >
                                {this.props.eventDetail.data.description}
                            </p>
                        </div>
                        <div className="small-12 columns">
                           {this.props.eventDetail.data.img &&
                            <img src={resolveStatic(this.props.eventDetail.data.img.original)} alt=""/>
                         }
                        </div>
                        <p className="small-12 center columns" dangerouslySetInnerHTML={{__html: sanitizeHtml(this.props.eventDetail.data.content)}}>
                        </p>
                    </div>
                    <div className="small-12 space-3 columns"/>
            </div>
            }
        </div>
        )
    }
}


export default withRouter(NewsDetail);
