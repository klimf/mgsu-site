import React from "react";
import {isEmpty, isEmail, isInt, isAlpha, isLength as length} from "validator";

/*
 * Rules for Admin panel
 * false\undefined - correct
 * true - warring
 */

export const required = (value = '') => !isEmpty(value) ? undefined : "Обязательное поле";
export const noSpace = (value = '') => value && value.indexOf(" ") < 0 ? undefined : "Строка не должна содержать пробелов.";
export const email = (value = '') => value && !isEmail(value) ? undefined : "Не верная почта";
export const isLength = (min, max) => (value = '') => value && !length(value, {min: min, max: max}) ? `Должно быть больше ${min} символов${max ? ` и меньше ${max}.` : '.'}` : undefined;
export const onlyEngOrRus = (value = '') => value && (isAlpha(value, ['en-US']) || isAlpha(value, ['ru-RU'])) ? undefined : 'Должны быть только русские или английские буквы';
