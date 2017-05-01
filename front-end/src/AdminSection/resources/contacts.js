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
    UrlField,
    ChipField,
    ImageField,
    Edit,
    Create,
    SimpleForm,
    DisabledInput,
    BooleanInput,
    TextInput,
    LongTextInput,
    DateInput,
    NumberInput,
    ImageInput
} from "admin-on-rest";

export const ContactList = (props) => (
    <List title="Список контактов" {...props}>
        <Datagrid>
            <TextField source="team" label="Команда"/>
            <TextField source="firstName" label="Имя"/>
            <TextField source="lastName" label="Фамилия"/>
            <TextField source="middleName" label="Отчество"/>
            <TextField source="description" label="Описание"/>
            <TextField source="contacts" label="Массив контактов"/>
            <ImageField source="img" label="Картинка"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const ContactEdit = (props) => (
    <Edit title="Изменение пользователя" {...props}>
        <SimpleForm>
            <TextInput source="team" label="Команда"/>
            <TextInput source="firstName" label="Имя"/>
            <TextInput source="lastName" label="Фамилия"/>
            <TextInput source="middleName" label="Отчество"/>
            <LongTextInput source="description" label="Описание"/>
            <LongTextInput source="contacts" label="Массив контактов"/>
            <ImageInput source="img" label="Картинка"/>
        </SimpleForm>
    </Edit>
);

export const ContactCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="team" label="Команда"/>
            <TextInput source="firstName" label="Имя"/>
            <TextInput source="lastName" label="Фамилия"/>
            <TextInput source="middleName" label="Отчество"/>
            <LongTextInput source="description" label="Описание"/>
            <LongTextInput source="contacts" label="Массив контактов"/>
            <ImageInput source="img" label="Картинка"/>
        </SimpleForm>
    </Create>
);