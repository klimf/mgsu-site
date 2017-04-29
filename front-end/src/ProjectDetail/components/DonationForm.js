import Validation from 'react-validation';
import React, {Component} from 'react';

export default class Registration extends Component {
    render() {
        return <Validation.components.Form>
            <div className="donation-form small-12 primary columns no-padding">
                <div className="form-tab small-6 space-3 h3 white uppercase center columns active">
                    Банковской картой
                </div>
                <div className="form-tab small-6 space-3 h3 white uppercase center columns">
                    По почте
                </div>
                <div className="small-12 space-1 columns"/>
                <div className="small-12 space-2 columns"/>
                <div className="form-hideable small-12 columns">
                    <div className="small-12 medium-6 large-4 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value='' placeholder="Имя"
                                                     name="name" validations={['required']}/>
                    </div>
                    <div className="small-12 medium-6 large-4 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value='' placeholder="Фамилия"
                                                     name="surname" validations={['required']}/>
                    </div>
                    <div className="small-12 medium-12 large-4 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value='' placeholder="E-mail"
                                                     name="mail" validations={['email']}/>
                    </div>
                </div>
                <div className="form-hideable small-12 columns">
                    <div className="small-12 medium-6 large-4 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value='' placeholder="Институт"
                                                     name="department" validations={['notRequired']}/>
                    </div>
                    <div className="small-12 medium-6 large-4 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value='' placeholder="Год выпуска"
                                                     name="year" validations={['altYear']}/>
                    </div>
                    <div className="small-12 medium-12 large-4 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value=''
                                                     placeholder="Специальность" name="speciality"
                                                     validations={['notRequired']}/>
                    </div>
                </div>
                <div className="small-12 columns">
                    <div className="small-12  columns">
                        <Validation.components.Input className="left" type="checkbox" id="check-graduate"/>
                        <label htmlFor="check-graduate">Я выпускник МГСУ</label>
                    </div>
                    <div className="small-12 columns">
                        <Validation.components.Input className="left" type="checkbox" id="check-rules"/>
                        <label htmlFor="check-rules">Согласен(а) c условиями оплаты,
                            обработки персональных данных и офертой</label>
                    </div>
                </div>
                <div className="small-12 space-2 columns"/>
                <div className="small-12 columns">
                    <div className="small-12 medium-6 large-4 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value='' name="currency" id="currency"
                                                     validations={['currency']}/>
                    </div>
                </div>
                <div className="small-12 space-2 columns"/>
                <div className="small-12 columns">
                    <div className="small-12 medium-6 columns no-padding">
                        <div className="small-6 columns">
                            <div className="donation-radio small-12 space-3 columns">Разовая</div>
                        </div>
                        <div className="small-6 columns">
                            <div className="donation-radio small-12 space-3 columns">В месяц</div>
                        </div>
                    </div>
                    <div className="small-12 medium-6 columns">
                        <Validation.components.Button
                            className="small-12 transition-3 border-small-white h2 white space-3 center hover-white columns">
                            Перейти к оплате
                        </Validation.components.Button>
                    </div>
                </div>
                <div className="small-12 space-1 columns"/>
                <div className="small-12 space-2 columns"/>
            </div>
        </Validation.components.Form>;
    }
}