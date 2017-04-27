import React, {Component} from 'react';
import Validation from 'react-validation';

export default class extends Component {
    render() {
        return <Validation.components.Form>
            <div>
                <label>
                    Название новости*
                    <Validation.components.Input type="text" value='' name="name" validations={['required']}/>
                </label>
                <label>
                    Новость*
                    <Validation.components.Teaxtarea type="text" value='' name="description" validations={['required']}/>
                </label>
                <label>
                    Загрузить картинку*
                    <Validation.components.Input type="file" value='' name="picture" validations={['required']}/>
                </label>
            </div>
            <div>
                <Validation.components.Button>Submit</Validation.components.Button>
            </div>
        </Validation.components.Form>;
    }
}