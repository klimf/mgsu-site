import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, NavLink} from "react-router-dom";
import {AboutContentManager} from "../common/reducers/ContentState";
import {Route} from "react-router";
import sanitizeHtml from 'sanitize-html';


const defaultProps = {
    directions: [
        'Что такое эндаумент фонд?',
        'Миссия и цели',
        'Схема работы',
        'Отчетность',
        'Команда',
        'Преимущества',
        'Документы',
        'Контакты'
    ]
};

class AboutPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }

    componentWillMount() {
        this.props.AboutContentManager.get();
        console.log(this.props.about)
    }

    componentDidMount() {
        console.log(this.props)
    }

    changeDirection(item){
        this.props.history.push('/about/' + item.title);
        this.setState({
            content: this.props.about.data[this.props.about.data.indexOf(item)].content
        });
    }

    render() {
        return (
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <div className="projects-navigation">
                        {console.log(this.props.about)}
                        {
                            this.props.about.data && this.props.about.data.map((item, index) =>
                                <NavLink to={`/about/${item.title}`} className="projects-nav-item"
                                     key={index}>
                                    {item.title}
                                </NavLink>
                            )
                        }
                    </div>
                    {
                        this.props.about.data && this.props.about.data.map((item, index) =>
                            <div key={index}>
                                <Route path={`/about/${item.title}`}
                                       render={() =>
                                           <div className="small-12 columns"
                                                dangerouslySetInnerHTML={{__html: sanitizeHtml(item.content)}}
                                           />
                                       }
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

AboutPage.defaultProps = defaultProps;

const mapStateToProps = state => {
    return {
        about: state.ContentState.About
    }
};

const mapDispatchToProps = dispatch => {
    return {
        AboutContentManager: AboutContentManager.bindTo(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutPage));

