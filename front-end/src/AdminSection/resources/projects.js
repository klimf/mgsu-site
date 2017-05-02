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
    NumberInput
} from "admin-on-rest";

export const ProjectList = (props) => (
    <List title="Список проектов" {...props} perPage={100}>
        <Datagrid >
            <TextField source="_id" label="ID"/>
            <TextField source="name" label="Название"/>
            <TextField source="shortDescription" label="Короткое описание"/>
            <DateField source="creatingDate" label="Создан"></DateField>
            <NumberField source="given" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Собрано"/>
            <NumberField source="need" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Нужно собрать"/>
            <TextField source="direction" label="Направление"/>
            <NumberField source="_v" label="версия"/>
            <BooleanField source="public" label="публичный"></BooleanField>
            <EditButton label="редактировать" />
        </Datagrid>
    </List>
);

export const ProjectEdit = (props) => (
    <Edit title="Изменение пользователя" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Имя"/>
            <DateInput source="creatingDate" label="Дата создания"/>
            <NumberInput source="need"  label="Нужно собрать"/>
            <NumberInput source="given" label="Собрано"/>
            <LongTextInput source="shortDescription" label="Короткое описание"/>
            <TextInput source="direction" label="Направление"/>
            <BooleanInput  source="public" label="Опубликвано"/>
        </SimpleForm>
    </Edit>
);

export const ProjectCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" label="Имя"/>
            <DateInput source="creatingDate" label="Дата создания"/>
            <NumberInput source="need" label="Нужно собрать"/>
            <NumberInput source="given" label="Собрано"/>
            <LongTextInput source="shortDescription" label="Короткое описание"/>
            <TextInput source="direction" label="Направление"/>
            <BooleanInput  source="public" label="Опубликвано"/>
        </SimpleForm>
    </Create>
);