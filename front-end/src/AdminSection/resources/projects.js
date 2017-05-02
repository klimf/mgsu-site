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
import RichTextInput from 'aor-rich-text-input';
import {required} from '../validationRules';


const directions = [
    {id: 'Образование', name: 'Образование'},
    {id: 'Наука', name: 'Наука'},
    {id: 'Студенты', name: 'Студенты'},
    {id: 'Стипендии', name: 'Стипендии'},
    {id: 'Инфраструктура', name: 'Инфраструктура'},
    {id: 'Спорт', name: 'Спорт'},
    {id: 'Проффессора и преподаватели', name: 'Проффессора и преподаватели'}
]



export const ProjectList = (props) => (
    <List title="Список проектов" {...props} perPage={100}>
        <Datagrid >
            <ImageField source="img.small" label="Изображение"></ImageField>
            <TextField source="name" label="Название"/>
            <TextField source="shortDescription" label="Короткое описание"/>
            <DateField source="creatingDate" label="Создан"></DateField>
            <NumberField source="given" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Собрано"/>
            <NumberField source="need" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Нужно собрать"/>
            <TextField source="direction" label="Направление"/>
            <NumberField source="_v" label="версия"/>
            <BooleanField source="public" label="публичный"></BooleanField>
            <EditButton  />
        </Datagrid>
    </List>
);

export const ProjectEdit = (props) => (
    <Edit title="Изменение проекта" {...props}>
        <TabbedForm>
            <FormTab label="Общая информация">
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small" />
                </ImageInput>
                <TextInput    source="name" label="Название"/>
                <NumberInput  source="given" label="Собрано"/>
                <NumberInput  source="need" label="Нужно собрать"/>
                <SelectInput  source="direction" label="Направление" choices={directions} />
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
                    <ImageField source="picSrc" />
                </ImageInput>
                <TextInput    source="name" label="Название"/>
                <NumberInput  source="given" label="Собрано"/>
                <NumberInput  source="need" label="Нужно собрать"/>
                <SelectInput  source="direction" label="Направление" choices={directions} />
            </FormTab>
            <FormTab label="Содержание">
                 <LongTextInput source="shortDescription" label="Короткое описание"/>
                 <RichTextInput source="content" label="Полное описание"/>
            </FormTab>
    </TabbedForm>
    </Create>
);