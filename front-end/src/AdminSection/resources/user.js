import React from "react";
import {noSpace, required, email, isLength, onlyEngOrRus} from "../validationRules";
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
            <TextInput source="name" label="Имя" validate={[required, noSpace, onlyEngOrRus]}/>
            <TextInput source="surname" label="Фамиля" validate={[required, noSpace, onlyEngOrRus]}/>
            <TextInput source="middleName" label="Отчество" validate={[noSpace, onlyEngOrRus]}/>
            <TextInput source="email" label="Email" validate={[required, email]}/>
            <TextInput source="contact" label="Контакт"/>
            <LongTextInput source="aboutMe" label="Обо мне" validate={[isLength(15)]}/>
            <TextInput source="image" label="Аватар"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name" label="Имя" validate={[required, noSpace, onlyEngOrRus]}/>
            <TextInput source="surname" label="Фамиля" validate={[required, noSpace, onlyEngOrRus]}/>
            <TextInput source="middleName" label="Отчество" validate={[noSpace, onlyEngOrRus]}/>
            <TextInput source="email" label="Email" validate={[required, email]}/>
            <TextInput source="contact" label="Контакт"/>
            <LongTextInput source="aboutMe" label="Обо мне" validate={[isLength(15)]}/>
            <TextInput source="image" label="Аватар"/>
        </SimpleForm>
    </Create>
);