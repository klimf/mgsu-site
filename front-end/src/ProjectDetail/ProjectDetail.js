import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import DonationForm from "./components/DonationForm"
import {ProjectDetailManager} from '../common/reducers/ProjectsState'
import {formatMoney, resolveStatic} from '../common/helpers';


class ProjectDetail extends Component {

    componentWillMount() {
        this.getProject(this.props.match.params.projectId)
        /////////////////////////////////////////////////
        // ФОРМАТ this.props.project.data
        ////////////////////////////////////////////////
        //
        // _id,
        // name,
        // shortDesciption,
        // img: {
        //     original,
        //     small
        // },
        // given,
        // need,
        // content
        console.log(this.props);
    }

    componentDidUpdate() {
        if (this.props.project.error) {
            this.props.history.push('/404');
        }
    }

    render() {
        return (
            <div className="page row expanded">
                <div className="content small-12 row">
                    <div className="space-4"/>
                    <div className="small-12 medium-6 columns m-b-2">
                        <div className="small-12 space-8 columns">
                            <div className={`bg-img ${!this.props.project.data.img && 'placeholder-img'}`}
                                 style={
                                     this.props.project.data.img && {
                                         backgroundImage: "url(" + resolveStatic(this.props.project.data.img.original) + ")"
                                     }
                                 }
                            />
                        </div>
                    </div>
                    <div className="small-12 medium-6 columns m-b-2">
                        <div className="small-12 space-8 columns">
                            <div className="small-12 space-base columns"/>
                            <div className="small-12 space-2 columns"/>
                            <div className="small-12 space-5 columns no-padding no-overflow">
                                <h2 className="small-12 uppercase center columns no-margin">{this.props.project.data.name}</h2>
                                <p className="small-12 center columns">{this.props.project.data.shortDescription}</p>
                            </div>
                            <div className="small-12 space-3 columns"/>
                            <div className="small-12 columns">
                                <div className="small-12 columns no-padding">
                                    <div className="absolute w-100 disabled space-base"></div>
                                    <div className="absolute w-100 primary space-base"
                                         style={{"width": `${(this.props.project.data.given / this.props.project.data.need * 100)}%`}}></div>
                                </div>
                            </div>
                            <div className="small-12 space-base columns"/>
                            <div className="small-12 space-2 columns"/>
                            <div className="project-half small-6 space-4 columns no-padding">
                                <p className="dark center no-margin">Собрано</p>
                                <h2 className="black center light no-margin">{formatMoney(this.props.project.data.given)}
                                    ₽</h2>
                            </div>
                            <div className="project-half small-6 space-4 columns no-padding">
                                <p className="dark center light no-margin">Цель</p>
                                <h2 className="black center light no-margin">{formatMoney(this.props.project.data.need)}
                                    ₽</h2>
                            </div>
                            <div className="bg-border"/>
                            <div className="decoration"/>
                        </div>
                    </div>
                    <div className="small-12 space-2 columns"/>
                    {this.props.project.data.content &&
                    <h1 className="small-12 uppercase center columns">О проекте</h1>
                    }
                    <p className="small-12 columns">
                        {this.props.project.data.content}
                    </p>
                    <div className="small-12 space-3 columns"/>
                    <h1 className="small-12 uppercase center columns">Вы можете помочь проекту</h1>
                    <div className="small-12 columns">
                        <DonationForm/>
                        <div className="small-12 space-2 columns"/>
                        <img alt="pic" src={require("../media/images/payment-info.png")}
                             className="small-12 medium-6 columns no-padding"/>
                        <img alt="pic" src={require("../media/images/payment-logos.png")}
                             className="small-12 medium-6 columns no-padding"/>
                    </div>
                    <div className="small-12 space-4 columns"/>
                </div>
            </div>
        )
    }

    getProject(id) {
        this.props.ProjectManager.getDetail(id)
    }
}

const mapStateToProps = state => {
    const project = state.ProjectsState.currentProject;
    return {project: project};
};

const mapDispatchToProps = dispatch => {
    return {
        ProjectManager: ProjectDetailManager.bindTo(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail));
