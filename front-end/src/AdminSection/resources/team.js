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
    SelectInput,
    FunctionField
} from "admin-on-rest";
import {StaticImage} from "../components/customFields";
import RichTextInput from "aor-rich-text-input";
import {required, isStr, currency} from '../validationRules';
import {resolveStatic} from "../../common/helpers";


export const People = {
    list:  (props) => (
        <List {...props} pagination={null} perPage={100}>
            <Datagrid >
                <StaticImage source="img" label="Фотография"></StaticImage>
                <FunctionField label="Полное имя" render={record => `${record.lastName} ${record.firstName} ${record.middleName}`}></FunctionField>
                <TextField source="description" label="Короткое описание"/>
                <EditButton  />
            </Datagrid>
        </List>
    ),
    edit:  (props) => (
        <Edit  {...props}>
        <SimpleForm>
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="lastName" label="Фамилия" validate={[required]}/>
                <TextInput source="firstName" label="Имя" validate={[required]}/>
                <TextInput source="middleName" label="Отчество"/>
                <TextInput source="description" label="Короткое описание" validate={[required]}/>
            </SimpleForm>
        </Edit>
    ),
    create: (props) => (
        <Create  {...props}>
            <SimpleForm>
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="lastName" label="Фамилия" validate={[required]}/>
                <TextInput source="firstName" label="Имя" validate={[required]}/>
                <TextInput source="middleName" label="Отчество"/>
                <TextInput source="description" label="Короткое описание" validate={[required]}/>
            </SimpleForm>
        </Create>
    )
}


export const peopleTeams = {
    aboutTeam: {
        team: 'our-team',
        label: 'Наша команда',
        component: People
    },
    contacts: {
        team: 'our-contacts',
        label: 'Наши контакты',
        component: People
    },
    vip: {
        team: 'vip-sponsors',
        label: 'Vip спонсоры',
        component: People
    }
};



