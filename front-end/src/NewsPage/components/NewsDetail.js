import React, {Component, PropTypes} from 'react';

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
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <h1 className="small-12 uppercase center columns">Заголовок который иногда длинный</h1>
                    <p className="small-12 center columns">
                        Краткое описание может быть и побольше
                        Краткое описание может быть и побольше
                    </p>
                    <div className="small-12 columns">
                        <img src={require("../../media/images/placeholder.png")} alt=""/>
                    </div>
                    <p className="small-12 center columns">
                        Полное описание может быть очень длинным
                        описание может быть очень длинным
                        Полное  может быть очень длинным
                        Полное описание может  очень длинным
                        Полное описание может быть очень длинным
                        Полное описание может быть  длинным
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


export default NewsDetail
