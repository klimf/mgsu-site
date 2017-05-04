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
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <div className="small-12 columns">
                        <h1 className="uppercase left">Заголовок который иногда длинный</h1>
                        <h2 className="uppercase right m-t-3 primary"> Апреля</h2>
                        <h1 className="uppercase right primary">31 </h1>
                        <p className="left">
                            Краткое описание может быть и побольше
                            Краткое описание может быть и побольше
                        </p>
                    </div>
                    <div className="small-12 columns">
                        <img src={require("../../media/images/placeholder.png")} alt=""/>
                    </div>
                    <p className="small-12 center columns">
                        Полное описание может быть очень длинным
                        описание может быть очень длинным
                        Полное может быть очень длинным
                        Полное описание может очень длинным
                        Полное описание может быть очень длинным
                        Полное описание может быть длинным
                        Полное описание может быть очень
                        Полное описание может быть очень длинным
                        Полное описание может быть очень длинным
                        Полное описание может быть очень длинным
                        Полное описание может быть очень длинным
                    </p>
                </div>
                <div className="small-12 space-3 columns"/>
            </div>
        )
    }
}


export default withRouter(NewsDetail);
