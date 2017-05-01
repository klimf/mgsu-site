import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    DateField,
    EditButton,
    NumberField,
    BooleanField,
    Edit,
    Create,
    SimpleForm,
    DisabledInput,
    BooleanInput,
    TextInput,
    LongTextInput,
    DateInput,
    NumberInput
} from "admin-on-rest";

export const ProjectList = (props) => (
    <List title="Список проектов" {...props}>
        <Datagrid>
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
            <NumberInput source="need" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Нужно собрать"/>
            <NumberInput source="given" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Собрано"/>
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
            <NumberInput source="need" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Нужно собрать"/>
            <NumberInput source="given" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}} label="Собрано"/>
            <LongTextInput source="shortDescription" label="Короткое описание"/>
            <TextInput source="direction" label="Направление"/>
            <BooleanInput  source="public" label="Опубликвано"/>
        </SimpleForm>
    </Create>
);