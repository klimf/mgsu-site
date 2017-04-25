import React from "react";
import Validation from "react-validation";
import validator from "validator";

Object.assign(Validation.rules, {
    required: {
        rule: value => {
            return !validator.isEmpty(value);
        },
        hint: value => {
            return <span>Обязательное поле</span>
        }
    },
    email: {
        rule: value => {
            return validator.isEmail(value);
        },
        hint: value => {
            return <span>{value} не Email.</span>
        }
    },
    year: {
        rule: value => {
            return validator.isInt(value, {min: 1900, max: 2030});
        },
        hint: value => {
            return <span>{value} не корректный год.</span>
        }
    },
    currency: {
        rule: value => {
            return validator.isInt(value, {min: 1, max: 9000000000});
        },
        hint: value => {
            return <span>{value} не корректное значение.</span>
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