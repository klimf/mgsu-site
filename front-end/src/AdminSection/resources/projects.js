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
    <List title="Список проектов" {...props}>
        <Datagrid>
            <TextField source="_id" label="id"/>
            <TextField source="name" label="Имя"/>
            <DateField source="creatingDate" label="Дата создания"/>
            <NumberField source="need" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Нужно собрать"/>
            <NumberField source="given" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Собрано"/>
            <TextField source="shortDescription" label="Короткое описание"/>
            <TextField source="direction" label="Направление"/>
            <BooleanField source="public" label="Опубликвано"/>
            <EditButton />
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