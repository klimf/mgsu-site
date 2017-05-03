import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class NewsPage extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div className="page row expanded">
                <div className="small-12 space-2 columns"/>
                <div className="content small-12 row">
                    {/*<h1 className="small-12 uppercase center columns">Новости</h1>*/}
                    <div className="small-12 projects-navigation center columns">
                        <NavLink to="/news" className="projects-nav-item">
                            Новости
                        </NavLink>
                        <NavLink to="/events" className="projects-nav-item">
                            События
                        </NavLink>
                    </div>
                    <div className="small-12 space-3 columns"/>
                    <div className="small-12 columns m-b-3">
                       
                        <div className="small-12 medium-12 large-6 columns">
                            <div className="home-news space-6 small-12 columns">
                                <div className="bg-img"/>
                                <div className="blackout"/>
                                <h2>Альбом выпускников</h2>
                                <p>
                                    В июле 2017 года будет подготовлен необычный альбом выпускников — CV-book, в котором
                                    работодатель сможет посмотреть
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        partners: state.ContentState.Partners,
        vipSpinsors: state.PeopleState.VipSpinsors,
        fundDetail: state.ProjectsState.fundDetail,
        events: state.EventsState,
        news: state.NewsState
    }
};
export default NewsPage;

