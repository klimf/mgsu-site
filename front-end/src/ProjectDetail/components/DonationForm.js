import Validation from 'react-validation';
import React, {Component} from 'react';

export default class Registration extends Component {
    render() {
        return <Validation.components.Form>
            <div>
                <label>
                    Required*
                    <Validation.components.Input value='' name="xuina" validations={['required']}/>
                </label>
                <label>
                    Email*
                    <Validation.components.Input value='' name="xuin" validations={['email']}/>
                </label>
                <label>
                    Год*
                    <Validation.components.Input value='' name="xuna" validations={['year']}/>
                </label>
                <label>
                    Деньги (Р)*
                    <Validation.components.Input value='' name="ina" validations={['currency']}/>
                </label>
            </div>
            <div>
                <Validation.components.Button>Submit</Validation.components.Button>
            </div>
        </Validation.components.Form>;
    }
}