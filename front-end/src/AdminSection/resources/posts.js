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

export const PostList = (props) => (
    <List title="Список проектов" {...props}>
        <Datagrid>
            <TextField source="title" label="Заголовок"/>
            <TextField source="description" label="Описание"/>
            <TextField source="content" label="Содержимое поста"/>
            <DateField source="creatingDate" label="Дата создания"/>
            <DateField source="date" label="Дата"/>
            <ChipField source="category" label="Категория"/>
            <UrlField source="link" label="Ссылка"/>
            <TextField source="time" label="Время"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = (props) => (
    <Edit title="Изменение пользователя" {...props}>
        <SimpleForm>
            <TextInput source="title" label="Заголовок"/>
            <LongTextInput source="description" label="Описание"/>
            <LongTextInput source="content" label="Содержимое поста"/>
            <DateInput source="creatingDate" label="Дата создания"/>
            <DateInput source="date" label="Дата"/>
            <TextInput source="category" label="Категория"/>
            <TextInput source="link" label="Ссылка"/>
            <TextInput source="time" label="Время"/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" label="Заголовок"/>
            <LongTextInput source="description" label="Описание"/>
            <LongTextInput source="content" label="Содержимое поста"/>
            <DateInput source="creatingDate" label="Дата создания"/>
            <DateInput source="date" label="Дата"/>
            <TextInput source="category" label="Категория"/>
            <TextInput source="link" label="Ссылка"/>
            <TextInput source="time" label="Время"/>
        </SimpleForm>
    </Create>
);