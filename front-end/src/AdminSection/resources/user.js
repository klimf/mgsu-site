import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    DisabledInput,
    TextInput,
    LongTextInput
} from "admin-on-rest";

export const UserList = (props) => (
    <List title="Список пользователей" {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name" label="Имя"/>
            <TextField source="surname" label="Фамиля"/>
            <TextField source="middleName" label="Отчество"/>
            <EmailField source="email" label="Email"/>
            <TextField source="contact" label="Контакт"/>
            <TextField source="aboutMe" label="Обо мне"/>
            <TextField source="image" label="Аватар"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = (props) => (
    <Edit title="Изменение пользователя" {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name" label="Имя"/>
            <TextInput source="surname" label="Фамиля"/>
            <TextInput source="middleName" label="Отчество"/>
            <TextInput source="email" label="Email"/>
            <TextInput source="contact" label="Контакт"/>
            <TextInput source="aboutMe" label="Обо мне"/>
            <TextInput source="image" label="Аватар"/>
            <LongTextInput source="body"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name" label="Имя"/>
            <TextInput source="surname" label="Фамиля"/>
            <TextInput source="middleName" label="Отчество"/>
            <TextInput source="email" label="Email"/>
            <TextInput source="contact" label="Контакт"/>
            <TextInput source="aboutMe" label="Обо мне"/>
            <TextInput source="image" label="Аватар"/>
            <LongTextInput source="body"/>
        </SimpleForm>
    </Create>
);