import React from "react";
import {isEmpty, isEmail, isInt} from "validator";

/*
 * Rules for Admin panel
 * false\undefined - correct
 * true - warring
 */

export const required = (value = '') => !isEmpty(value) ? undefined : "Обязательное поле";
export const noSpace = (value = '') => value && value.indexOf(" ") < 0 ? undefined : "Строка не должна содержать пробелов.";
export const email = (value = '') => !isEmail(value) ? undefined : "Не верная почта";
export const minLength = min => (value = '') => value && value.length < min ? `Должно быть ${min} символов или больше` : undefined;