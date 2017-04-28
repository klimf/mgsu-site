import React, {Component} from 'react';
import Validation from 'react-validation';

export default class extends Component {
    render() {
        return <Validation.components.Form>
            <div>
                <Validation.components.Button>Submit</Validation.components.Button>
            </div>
        </Validation.components.Form>;
    }
}