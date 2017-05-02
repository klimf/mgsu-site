import React from "react";
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    NumberField,
    BooleanField,
    Edit,
    Create,
    SimpleForm,
    BooleanInput,
    TextInput,
    LongTextInput,
    DateInput,
    NumberInput,
    ImageField,
    ImageInput,
    TabbedForm,
    FormTab,
    SelectInput
} from "admin-on-rest";
import {StaticImage} from "../components/customFields";
import RichTextInput from "aor-rich-text-input";
import {required, isStr, currency} from '../validationRules';
import {resolveStatic} from "../../common/helpers";


const directions = [
    {id: 'образование', name: 'Образование'},
    {id: 'наука', name: 'Наука'},
    {id: 'студенты', name: 'Студенты'},
    {id: 'стипендии', name: 'Стипендии'},
    {id: 'инфраструктура', name: 'Инфраструктура'},
    {id: 'спорт', name: 'Спорт'},
    {id: 'проффессора и преподаватели', name: 'Проффессора и преподаватели'}
];


export const ProjectList = (props) => (
    <List title="Список проектов" {...props} perPage={100}>
        <Datagrid >
            <StaticImage source="img" label="Изображение"></StaticImage>
            <TextField source="name" label="Название"/>
            <TextField source="shortDescription" label="Короткое описание"/>
            <DateField source="creatingDate" label="Создан"/>
            <NumberField source="given" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}}
                         label="Собрано"/>
            <NumberField source="need" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}}
                         label="Нужно собрать"/>
            <TextField source="direction" label="Направление"/>
            <NumberField source="_v" label="версия"/>
            <BooleanField source="public" label="публичный"/>
            <EditButton  />
        </Datagrid>
    </List>
);

export const ProjectEdit = (props) => (
    <Edit title="Изменение проекта" {...props}>
        <TabbedForm>
            <FormTab label="Общая информация">
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="name" label="Название" validate={[required, isStr]}/>
                <NumberInput source="given" label="Собрано" validate={[required, currency]}/>
                <NumberInput source="need" label="Нужно собрать" validate={[required, currency]}/>
                <SelectInput source="direction" label="Направление" choices={directions} validate={[required]}/>
            </FormTab>
            <FormTab label="Содержание">
                <LongTextInput source="shortDescription" label="Короткое описание"/>
                <RichTextInput source="content" label="Полное описание"/>
            </FormTab>
        </TabbedForm>
    </Edit>
);

export const ProjectCreate = (props) => (
    <Create title={'Создать проект'} {...props}>
        <TabbedForm>
            <FormTab label="Общая информация">
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="name" label="Название" validate={[required, isStr]}/>
                <NumberInput source="given" label="Собрано" validate={[required, currency]}/>
                <NumberInput source="need" label="Нужно собрать" validate={[required, currency]}/>
                <SelectInput source="direction" label="Направление" choices={directions} validate={[required]}/>
            </FormTab>
            <FormTab label="Содержание">
                <LongTextInput source="shortDescription" label="Короткое описание"/>
                <RichTextInput source="content" label="Полное описание"/>
            </FormTab>
        </TabbedForm>
    </Create>
);