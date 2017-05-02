import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    NumberField,
    BooleanField,
    Edit,
    Create,
    SimpleForm,
    BooleanInput,
    TextInput,
    NumberInput
} from "admin-on-rest";
import {required, isStr, noSpace} from '../validationRules';

export const PrivilegeList = (props) => (
    <List title="Список преимуществ" {...props}>
        <Datagrid>
            <NumberField source="value" label="Значение"/>
            <TextField source="name" label="Название"/>
            <TextField source="features" label="Фича"/>
            <BooleanField source="recursive" label="Рекурсивно"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const PrivilegeEdit = (props) => (
    <Edit title="Изменение пользователя" {...props}>
        <SimpleForm>
            <NumberInput source="value" label="Значение" validate={[required]}/>
            <TextInput source="name" label="Название" validate={[required, isStr]}/>
            <TextInput source="features" label="Фича" validate={[required, isStr]}/>
            <BooleanInput source="recursive" label="Зекурсивно"/>
        </SimpleForm>
    </Edit>
);

export const PrivilegeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="value" label="Значение" validate={[required]}/>
            <TextInput source="name" label="Название" validate={[required, isStr]}/>
            <TextInput source="features" label="Фича" validate={[required, isStr]}/>
            <BooleanInput source="recursive" label="Зекурсивно"/>
        </SimpleForm>
    </Create>
);