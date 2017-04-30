import React, {Component} from "react";
import { connect, bindActionCreators } from "react-redux";
import { withRouter } from "react-router-dom";
import DonationForm from "./components/DonationForm"


class ProjectDetail extends Component {
    render() {
        return (
            <div className="page row expanded">
                <div className="content small-12 row">
                    <div className="space-4"/>
                    <div className="small-12 medium-6 columns m-b-2">
                        <div className="small-12 space-8 columns">
                            <div className="bg-img"/>
                        </div>
                    </div>
                    <div className="small-12 medium-6 columns m-b-2">
                        <div className="small-12 space-8 columns">
                            <div className="small-12 space-base columns"/>
                            <div className="small-12 space-2 columns"/>
                            <div className="small-12 space-5 columns no-padding no-overflow">
                                <h2 className="small-12 uppercase center columns no-margin">Автопробег НИУ МГСУ</h2>
                                <p className="small-12 center columns">
                                    Задача старшего поколения - сохранить память об одном из самых важных
                                    исторических событий нашей страны
                                </p>
                            </div>
                            <div className="small-12 space-3 columns"/>
                            <div className="small-12 columns">
                                <div className="small-12 columns no-padding">
                                    <div className="absolute w-100 disabled space-base"></div>
                                    <div className="absolute w-100 primary space-base"
                                         style={{"width": 70 + "%"}}></div>
                                </div>
                            </div>
                            <div className="small-12 space-base columns"/>
                            <div className="small-12 space-2 columns"/>
                            <div className="project-half small-6 space-4 columns no-padding">
                                <p className="dark center no-margin">Собрано</p>
                                <h2 className="black center light no-margin">12 000 000p</h2>
                            </div>
                            <div className="project-half small-6 space-4 columns no-padding">
                                <p className="dark center light no-margin">Цель</p>
                                <h2 className="black center light no-margin">23 000 000p</h2>
                            </div>
                            <div className="bg-border"/>
                        </div>
                    </div>
                    <div className="small-12 space-2 columns"/>
                    <h1 className="small-12 uppercase center columns">О проекте</h1>
                    <p className="small-12 columns">
                        Задача старшего поколения - сохранить память об одном из самых важных
                        исторических событий нашей страны среди молодого поколения, которое знает
                        о войне только лишь по рассказам ветеранов и подвержены влиянию людей,
                        пытающихся «переписать историю».
                        • Автопробег по городам воинской славы «Дорогами победы»
                        • Творческий фестиваль «Победа, добытая единством»
                        • Военно-патриотический парад на территории МГСУ
                        • Изготовление подарочно-сувенирных изданий книг об истории Великой
                        Отечественной Войны
                        • Изготовление флагов Российской Федерации для патриотических акций
                        НИУ МГСУ
                        • Участие во Всероссийской акции «Бессмертный полк»
                        В этом году в первых числах мая автоколонна студентов вновь отправится в
                        автопробег по городам воинской Славы. Наши активисты посетят город
                        воинской славы Волоколамск, в котором они примут участие в патриотическом
                        митинге и возложат цветы к монументу памяти Великой победе. После
                        Волоколамска автоколонна направится в город Мытищи, где на два дня
                        окунется в солдатскую жизнь в экстремальных условиях: жизнь в палатках,
                        «солдатская зарница», еда приготовленная на костре и т.д.
                    </p>
                    <div className="small-12 space-3 columns"/>
                    <div className="small-12 columns">
                        <DonationForm/>
                        <div className="small-12 space-2 columns"/>
                        <img alt="pic" src={require("../media/images/payment-info.png")} className="small-12 medium-6 columns no-padding"/>
                        <img alt="pic" src={require("../media/images/payment-logos.png")} className="small-12 medium-6 columns no-padding"/>
                    </div>
                    <div className="small-12 space-4 columns"/>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.getProject(this.props.match.params.projectId)
    }
    getProject(id) {
        this.props.GetProjectDetailAsync.perform({
            params: [id]
        })
    }
}

const mapStateToProps = state => {
  
};

const mapDispatchToProps = dispatch => {
   
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail));
