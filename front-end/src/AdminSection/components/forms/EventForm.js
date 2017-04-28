import React, {Component} from 'react';
import Validation from 'react-validation';

export default class extends Component {
    render() {
        return <Validation.components.Form>
            <div>
                <label>
                    Название события*
                    <Validation.components.Input type="text" value='' name="name" validations={['required']}/>
                </label>
                <label>
                    Событие*
                    <Validation.components.Textarea value='' name="description" validations={['required']}/>
                </label>
                <label>
                    Дата события*
                    <Validation.components.Input type="text" value='' name="name" validations={['required']}/>
                </label>
            </div>
            <div>
                <Validation.components.Button>Submit</Validation.components.Button>
            </div>
        </Validation.components.Form>;
    }
}