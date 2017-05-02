import React from "react";
import {isEmpty, isEmail, isInt, isAlpha, isLength as length} from "validator";

/*
 * Rules for Admin panel
 * false\undefined - correct
 * true - warring
 */

export const required = (value = '') => !isEmpty(value) ? false : "Обязательное поле";
export const noSpace = (value = '') => value && value.indexOf(" ") < 0 ? false : "Строка не должна содержать пробелов.";
export const email = (value = '') => value && !isEmail(value) ? false : "Не верная почта";
export const isLength = (min, max) => (value = '') => value && !length(value, {min: min,max: max}) ? `Должно быть больше ${min} символов${max ? ` и меньше ${max}.` : '.'}` : false;
export const onlyEngOrRus = (value = '') => value && (isAlpha(value, ['en-US']) || isAlpha(value, ['ru-RU'])) ? false : 'Должны быть только русские или английские буквы';
export const isStr = (value = '') => value && !(/[A-Za-zа-яА-ЯёЁ]/.test(value)) ? false : 'Разрешены только буквы.';
export const year = (value = '') => value && !(isInt(value, {min: 1900, max: 2030})) ? false : 'Не корректный год.';
export const currency = (value = '') => value && !(isInt(value, {min: 1,max: 900000000000})) ? false : 'Не корректное значение.';
