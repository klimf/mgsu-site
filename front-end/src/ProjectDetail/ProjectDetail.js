import React, {Component} from "react";
import { connect, bindActionCreators } from "react-redux";
import { withRouter } from "react-router-dom";
import DonationForm from "./components/DonationForm"


class ProjectDetail extends Component {
    render() {
        return (
            <div className="page row expanded">
                <div className="content small-12 row">
                    <div className="space-3"/>
                    <div className="small-12 medium-6 columns padding-left">
                        <div className="small-12 space-8 columns">
                            <div className="bg-img"/>
                        </div>
                    </div>
                    <div className="small-12 medium-6 columns padding-right">
                        <div className="small-12 space-8 columns">
                            <h2 className="small-12 uppercase center columns">Автопробег НИУ МГСУ</h2>
                            <div className="small-6 space-4 columns no-padding">
                                <p className="black center">Собрано</p>
                                <h3 className="black center">12 000 000p</h3>
                            </div>
                            <div className="small-6 space-4 columns no-padding">
                                <p className="black center">Цель</p>
                                <h3 className="black center">23 000 000p</h3>
                            </div>
                            <div className="bg-border"/>
                        </div>
                    </div>
                    <div className="small-12 space-3 columns"/>
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
                    <h1>{this.props.match.params.projectId}</h1>

                    <h2>Форма доната</h2>
                    <DonationForm/>
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
