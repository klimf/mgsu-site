import React from "react";
import {isEmpty, isEmail, isInt, isLength as length, isURL as url} from "validator";

/*
 * Rules for Admin panel
 * false\undefined - correct
 * true - warring
 */

export const required = (value = '') => {
    value += '';
    return value && !isEmpty(value) ? false : "Обязательное поле";
};

export const noSpace = (value = '') => {
    value += '';
    return value && value.indexOf(" ") < 0 ? false : "Строка не должна содержать пробелов.";
};

export const email = (value = '') => {
    value += '';
    return value && !isEmail(value) ? false : "Не верная почта";
};

export const isLength = (min, max) => (value = '') => {
    value += '';
    return value && !length(value, {
        min: min,
        max: max
    }) ? `Должно быть больше ${min} символов${max ? ` и меньше ${max}.` : '.'}` : false;
};

export const year = (value = '') => {
    value += '';
    return value && isInt(value, {min: 1900, max: 2030}) ? false : 'Не корректный год.';
};

export const currency = (value = '') => {
    value += '';
    return value && isInt(value, {min: 1, max: 900000000000}) ? false : 'Не корректное значение.';
};

export const isStr = (value = '') => {
    value += '';
    let correct = true;
    for (let i = 0; i < value.length; i++) {
        if (correct) {
            correct = /[A-Za-zа-яА-ЯёЁ ]/.test(value[i]);
        }
    }
    return value && correct ? false : 'Разрешены только буквы.'
};

export const isURL = (value = '') => {
    value+='';
    return value && url(value) ? false : 'Не корректный адрес.';
};