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
    {id: 'Образование', name: 'Образование'},
    {id: 'Наука', name: 'Наука'},
    {id: 'Студенты', name: 'Студенты'},
    {id: 'Стипендии', name: 'Стипендии'},
    {id: 'Инфраструктура', name: 'Инфраструктура'},
    {id: 'Спорт', name: 'Спорт'},
    {id: 'Проффессора и преподаватели', name: 'Проффессора и преподаватели'}
];

export const ProjectList = (props) => (
    <List title="Список проектов" {...props} pagination={null} >
        <Datagrid >
            <StaticImage source="img" label="Изображение"></StaticImage>
            <TextField source="name" label="Название"/>
            <TextField source="shortDescription" label="Короткое описание"/>
            <DateField source="creatingDate" label="Создан"/>
            <NumberField source="given" options={{style: 'currency', currency: 'RUB'}}
                         label="Собрано"/>
            <NumberField source="need" options={{style: 'currency', currency: 'RUB'}}
                         label="Нужно собрать"/>
            <TextField source="direction" label="Направление"/>
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
                <TextInput source="name" label="Название" validate={[required]}/>
                <NumberInput source="given" label="Собрано" validate={[required, currency]}/>
                <NumberInput source="need" label="Нужно собрать" validate={[required, currency]}/>
                <SelectInput source="direction" label="Направление" choices={directions} validate={[required]}/>
            </FormTab>
            <FormTab label="Содержание">
                <LongTextInput source="shortDescription" label="Короткое описание"/>
                <RichTextInput source="content" label="Полное описание" toolbar={[ [{ 'header': [1, 2, 3, false] }], [ 'bold', 'italic', 'underline', 'strike'], [{ 'list': 'ordered'}, { 'list': 'bullet' }], [{ 'direction': 'rtl' }],  [ 'link', 'image', ] ]}/>
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
                <TextInput source="name" label="Название" validate={[required]}/>
                <NumberInput source="given" label="Собрано" validate={[required, currency]}/>
                <NumberInput source="need" label="Нужно собрать" validate={[required, currency]}/>
                <SelectInput source="direction" label="Направление" choices={directions} validate={[required]}/>
            </FormTab>
            <FormTab label="Содержание">
                <LongTextInput source="shortDescription" label="Короткое описание"/>
                <RichTextInput source="content" label="Полное описание" toolbar={[ [{ 'header': [1, 2, 3, false] }], [ 'bold', 'italic', 'underline', 'strike'], [{ 'list': 'ordered'}, { 'list': 'bullet' }], [{ 'direction': 'rtl' }],  [ 'link', 'image', ] ]}/>
            </FormTab>
        </TabbedForm>
    </Create>
);
