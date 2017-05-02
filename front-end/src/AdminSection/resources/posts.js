import React from "react";
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    UrlField,
    ChipField,
    Edit,
    Create,
    SimpleForm,
    TextInput,
    LongTextInput,
    DateInput,
    ReferenceInput,
    SelectInput
} from "admin-on-rest";
import {required, isStr, isURL} from '../validationRules';

export const PostList = (props) => (
    <List title="Список проектов" {...props}>
        <Datagrid>
            <TextField source="title" label="Заголовок"/>
            <TextField source="description" label="Описание"/>
            <TextField source="content" label="Содержимое поста"/>
            <DateField source="date" label="Дата"/>
            <ChipField source="category" label="Категория"/>
            <UrlField source="link" label="Ссылка"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = (props) => (
    <Edit title="Изменение проекта" {...props}>
        <SimpleForm>
            <TextInput source="title" label="Заголовок" validate={[required]}/>
            <LongTextInput source="description" label="Описание" validate={[required]}/>
            <LongTextInput source="content" label="Содержимое поста" validate={[required]}/>
            <DateInput source="date" label="Дата" validate={[required]}/>
            <TextInput source="category" label="Категория" validate={[required]}/>
            <TextInput source="link" label="Ссылка" validate={[required, isURL]}/>
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" label="Заголовок" validate={[required]}/>
            <LongTextInput source="description" label="Описание" validate={[required]}/>
            <LongTextInput source="content" label="Содержимое поста" validate={[required]}/>
            <DateInput source="date" label="Дата" validate={[required]}/>
            <TextInput source="category" label="Категория" validate={[required]}/>
            <TextInput source="link" label="Ссылка" validate={[required, isURL]}/>
        </SimpleForm>
    </Create>
);