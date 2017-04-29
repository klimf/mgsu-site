import React from "react";
import Validation from "react-validation";
import {isEmpty, isEmail, isInt} from "validator";

Object.assign(Validation.rules, {
    required: {
        rule: value => {
            return !isEmpty(value);
        },
        hint: value => {
            return <span>Обязательное поле</span>
        }
    },
    notRequired: {
        rule: value => {
            return value;
        }
    },
    email: {
        rule: value => {
            return isEmail(value);
        },
        hint: value => {
            return <span>{value} не Email.</span>
        }
    },
    year: {
        rule: value => {
            return isInt(value, {min: 1900, max: 2030});
        },
        hint: value => {
            return <span>{value} не корректный год.</span>
        }
    },
    altYear: {
        rule: value => {
            return isInt(value, {min: 1900, max: 2030}) || isEmpty(value);
        },
        hint: value => {
            return <span>{value} не корректный год.</span>
        }
    },
    currency: {
        rule: value => {
            return isInt(value, {min: 1, max: 9000000000});
        },
        hint: value => {
            return <span>{value} Р не корректное значение.</span>
        }
    },
    api: {
        hint: value => (
            <button
                className="form-error is-visible"
            >
                API Error on "{value}" value. Focus to hide.
            </button>
        )
    }
});