import React, {Component} from 'react';
import Validation from 'react-validation';

export default class extends Component {
    render() {
        return <Validation.components.Form>
            <div>
                <label>
                    Фамилия*
                    <Validation.components.Input type="text" value='' name="name" validations={['required']}/>
                </label>
                <label>
                    Имя*
                    <Validation.components.Input type="text" value='' name="name" validations={['required']}/>
                </label>
                <label>
                    Отчество*
                    <Validation.components.Input type="text" value='' name="name" validations={['required']}/>
                </label>
                <label>
                    Обо мне*
                    <Validation.components.Textarea type="text" value='' name="description" validations={['required']}/>
                </label>
                <label>
                    Контакт*
                    <Validation.components.Input type="text" value='' name="aboutProject" validations={['required']}/>
                </label>
                <label>
                    Загрузить Аватар*
                    <Validation.components.Input type="file" value='' name="avatar" validations={['required']}/>
                </label>
            </div>
            <div>
                <Validation.components.Button>Submit</Validation.components.Button>
            </div>
        </Validation.components.Form>;
    }
}