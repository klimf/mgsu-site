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
    ReferenceField,
    Edit,
    Create,
    SimpleForm,
    DisabledInput,
    BooleanInput,
    TextInput,
    LongTextInput,
    DateInput,
    NumberInput,
    ReferenceInput,
    SelectInput
} from "admin-on-rest";

export const DontaionList = (props) => (
    <List title="Донаты" {...props}>
        <Datagrid>
            <ReferenceField label="Проект" source="_id" reference="projects">
                <TextField source="name"/>
            </ReferenceField>
            <TextField source="user.firstName" label="Имя"/>
            <TextField source="user.lastName" label="Фамилия"/>
            <TextField source="user.middleName" label="Отчество"/>
            <NumberField source="value" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}}
                         label="Пожертвовал"/>
            <BooleanField source="recursive" label="Ежемесячно"/>
            <DateField source="date" label="Дата"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const DontaionEdit = (props) => (
    <Edit title="Изменение пользователя" {...props}>
        <SimpleForm>
            <ReferenceInput label="Проект" source="_id" reference="projects">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="user.firstName" label="Имя"/>
            <TextInput source="user.lastName" label="Фамилия"/>
            <TextInput source="user.middleName" label="Отчество"/>
            <NumberInput source="value" label="Пожертвовал"/>
            <BooleanInput source="recursive" label="Ежемесячно"/>
            <DateInput source="date" label="Дата"/>
        </SimpleForm>
    </Edit>
);

export const DontaionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Проект" source="_id" reference="projects">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="user.firstName" label="Имя"/>
            <TextInput source="user.lastName" label="Фамилия"/>
            <TextInput source="user.middleName" label="Отчество"/>
            <NumberInput source="value" label="Пожертвовал"/>
            <BooleanInput source="recursive" label="Ежемесячно"/>
            <DateInput source="date" label="Дата"/>
        </SimpleForm>
    </Create>
);