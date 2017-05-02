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
    NumberInput,
    ImageField,
    ImageInput,
    TabbedForm,
    FormTab,
    SelectInput
} from "admin-on-rest";
import RichTextInput from 'aor-rich-text-input';
import {required} from '../validationRules';
import {resolveStatic} from "../../common/helpers";


export const AboutList = (props) => (
    <List title="Страница о фонде" {...props} perPage={100}>
        <Datagrid >
            <TextField source="title" label="Раздел"/>
            <TextField source="content" label="Содержание"/>
            <EditButton  />
        </Datagrid>
    </List>
);

export const АboutEdit = (props) => (
    <Edit title="Изменение раздела" {...props}>
        <SimpleForm>
                 <TextInput    source="title" label="Название"/>
                 <RichTextInput source="content" label="Содержание"/>
         </SimpleForm>
    </Edit>
);

export const AboutCreate = (props) => (
    <Create title={'Создать Раздел'} {...props}>
         <SimpleForm>
                 <TextInput    source="title" label="Название"/>
                 <RichTextInput source="content" label="Содержание"/>
         </SimpleForm>
    </Create>
);