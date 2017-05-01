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

export const PrivilegeList = (props) => (
    <List title="Список преимуществ" {...props}>
        <Datagrid>
            <NumberField source="value " label="Значение"/>
            <TextField source="name" label="Название"/>
            <TextField source="features" label="features"/>
            <BooleanField source="recursive" label="Рекурсивно"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const PrivilegeEdit = (props) => (
    <Edit title="Изменение пользователя" {...props}>
        <SimpleForm>
            <NumberInput source="value " label="Значение"/>
            <TextInput source="name" label="Название"/>
            <TextInput source="features" label="features"/>
            <BooleanInput source="recursive" label="Зекурсивно"/>
        </SimpleForm>
    </Edit>
);

export const PrivilegeCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="value " label="Значение"/>
            <TextInput source="name" label="Название"/>
            <TextInput source="features" label="features"/>
            <BooleanInput source="recursive" label="Зекурсивно"/>
        </SimpleForm>
    </Create>
);