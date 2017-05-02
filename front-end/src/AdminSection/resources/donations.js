import React from "react";
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    NumberField,
    BooleanField,
    ReferenceField,
    Edit,
    Create,
    SimpleForm,
    BooleanInput,
    TextInput,
    DateInput,
    NumberInput,
    ReferenceInput,
    SelectInput
} from "admin-on-rest";

export const DontaionList = (props) => (
    <List title="Донаты" {...props}>
        <Datagrid>
            <ReferenceField label="Проект" source="name" reference="projects">
                <TextField source="project"/>
            </ReferenceField>
            <TextField source="user.firstName" label="Имя"/>
            <TextField source="user.lastName" label="Фамилия"/>
            <TextField source="user.middleName" label="Отчество"/>
            <NumberField source="value" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}}
                         label="Пожертвовал"/>
            <BooleanField source="recursive" label="Ежемесячно"/>
            <BooleanField source="confirm" label="Подтвержден"/>
            <DateField source="date" label="Дата"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const DontaionEdit = (props) => (
    <Edit title="Изменение пользователя" {...props}>
        <SimpleForm>
            <ReferenceInput label="Проект" source="name" reference="projects" allowEmpty>
                <SelectInput optionText="project"/>
            </ReferenceInput>
            <TextInput source="user.firstName" label="Имя"/>
            <TextInput source="user.lastName" label="Фамилия"/>
            <TextInput source="user.middleName" label="Отчество"/>
            <NumberInput source="value" label="Пожертвовал"/>
            <BooleanInput source="recursive" label="Ежемесячно"/>
            <BooleanInput source="confirm" label="Подтвержден"/>
            <DateInput source="date" label="Дата"/>
        </SimpleForm>
    </Edit>
);

export const DontaionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Проект" source="project" reference="projects" allowEmpty>
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="user.firstName" label="Имя"/>
            <TextInput source="user.lastName" label="Фамилия"/>
            <TextInput source="user.middleName" label="Отчество"/>
            <NumberInput source="value" label="Пожертвовал"/>
            <BooleanInput source="recursive" label="Ежемесячно"/>
            <BooleanInput source="confirm" label="Подтвержден"/>
            <DateInput source="date" label="Дата"/>
        </SimpleForm>
    </Create>
);