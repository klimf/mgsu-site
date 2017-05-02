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
                                                     name="department" validations/>
                    </div>
                    <div className="small-12 medium-6 large-4 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value='' placeholder="Год выпуска"
                                                     name="year" validations={[]}/>
                    </div>
                    <div className="small-12 medium-12 large-4 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value=''
                                                     placeholder="Специальность" name="speciality"
                                                     validations/>
                    </div>
                </div>
                <div className="small-12 columns">
                    <div className="small-12  columns">
                        <input className="left" type="checkbox" id="check-graduate"/>
                        <label htmlFor="check-graduate">Я выпускник МГСУ</label>
                    </div>
                    <div className="small-12 columns">
                        <input className="left" type="checkbox" id="check-rules"/>
                        <label htmlFor="check-rules">Согласен(а) c условиями оплаты,
                            обработки персональных данных и офертой</label>
                    </div>
                </div>
                <div className="small-12 space-2 columns"/>
                <div className="small-12 columns">
                    <div className="small-12 medium-6 large-3 m-b-2 columns no-padding end">
                        <input type="radio" className="remove" name="money" id="money-200"/>
                        <label className="small-6 columns" htmlFor="money-200">
                            <div className="pointer">200 ₽</div>
                        </label>
                        <input type="radio" className="remove" name="money" id="money-500"/>
                        <label className="small-6 columns" htmlFor="money-500">
                            <div className="pointer">500 ₽</div>
                        </label>
                    </div>
                    <div className="small-12 medium-6 large-3 m-b-2 columns no-padding end">
                        <input type="radio" className="remove" name="money" id="money-1000"/>
                        <label className="small-6 columns" htmlFor="money-1000">
                            <div className="pointer">1000 ₽</div>
                        </label>
                        <input type="radio" className="remove" name="money" id="money-3000"/>
                        <label className="small-6 columns" htmlFor="money-3000">
                            <div className="pointer">3000 ₽</div>
                        </label>
                    </div>
                    <div className="small-12 medium-6 large-3 m-b-2 columns no-padding end">
                        <input type="radio" className="remove" name="money" id="money-5000"/>
                        <label className="small-6 columns" htmlFor="money-5000">
                            <div className="pointer">5000 ₽</div>
                        </label>
                        <input type="radio" className="remove" name="money" id="money-10000"/>
                        <label className="small-6 columns" htmlFor="money-10000">
                            <div className="pointer">10000 ₽</div>
                        </label>
                    </div>
                    <div className="small-12 medium-6 large-3 m-b-2 columns end">
                        <Validation.components.Input className="small-12 columns end" value=''
                                                     placeholder="Другая сумма" name="currency" id="currency"
                                                     validations={['currency']}/>
                    </div>
                </div>
                <div className="small-12 space-2 columns"/>
                <div className="small-12 columns">
                    <div className="small-12 medium-6 columns no-padding">
                        <div className="small-6 columns">
                            <input type="radio" className="remove" name="donation-select" id="single"/>
                            <label htmlFor="single">
                                <div className="donation-select pointer m-b-2 small-12 space-3 columns">Разовая</div>
                            </label>
                        </div>
                        <div className="small-6 columns">
                            <input type="radio" className="remove" name="donation-select" id="regular"/>
                            <label htmlFor="regular">
                                <div className="donation-select pointer m-b-2 small-12 space-3 columns">В месяц</div>
                            </label>
                        </div>
                    </div>
                    <div className="small-12 medium-6 columns">
                        <Validation.components.Button
                            className="donation-form-btn pointer m-b-2 small-12 columns">
                            Перейти к оплате
                        </Validation.components.Button>
                    </div>
                </div>
                <div className="small-12 space-1 columns"/>
            </div>
        </Validation.components.Form>;
    }
}