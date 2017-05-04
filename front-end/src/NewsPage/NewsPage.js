import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import NewsItem from "./components/NewsItem";
import EventItem from "./components/EventItem";
import {ActionBar} from '../AdminSection/components/AdminToolbar';
class NewsPage extends Component {

    componentWillMount(nextProps, nextState) {
         this.props.NewsManager.get();
    }

    render() {
        return (
            <div className="page row expanded">
                <div className="small-12 space-2 columns"/>
                <div className="content small-12 row">
                    {/*<h1 className="small-12 uppercase center columns">Новости</h1>*/}
                    <div className="small-12 projects-navigation center columns">
                        <NavLink to="/news"  className="projects-nav-item">
                            Новости
                        </NavLink>
                        <NavLink to="/events" className="projects-nav-item" >
                            События
                        </NavLink>
                    </div>
                    <div className="small-12 space-3 columns"/>
                    <div className="small-12 columns m-b-3">
                     {this.props.news.data  && this.props.news.data.map((item, index) =>   
                         <NewsItem key={index} item={item} />
                    )}
                    </div>
                </div>
            </div>
        )
    }


}

export default NewsPage;