import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    ImageField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    LongTextInput,
    ImageInput
} from "admin-on-rest";
import {required, isStr, noSpace} from '../validationRules';

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
            <TextInput source="team" label="Команда" validate={[required, isStr]}/>
            <TextInput source="firstName" label="Имя" validate={[required, isStr, noSpace]}/>
            <TextInput source="lastName" label="Фамилия" validate={[required, isStr, noSpace]}/>
            <TextInput source="middleName" label="Отчество" validate={[required, isStr, noSpace]}/>
            <LongTextInput source="description" label="Описание" validate={[required]}/>
            <LongTextInput source="contacts" label="Массив контактов"/>
            <ImageInput source="img" label="Картинка"/>
        </SimpleForm>
    </Edit>
);

export const ContactCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="team" label="Команда" validate={[required, isStr]}/>
            <TextInput source="firstName" label="Имя" validate={[required, isStr, noSpace]}/>
            <TextInput source="lastName" label="Фамилия" validate={[required, isStr, noSpace]}/>
            <TextInput source="middleName" label="Отчество" validate={[required, isStr, noSpace]}/>
            <LongTextInput source="description" label="Описание" validate={[required]}/>
            <LongTextInput source="contacts" label="Массив контактов"/>
            <ImageInput source="img" label="Картинка"/>
        </SimpleForm>
    </Create>
);