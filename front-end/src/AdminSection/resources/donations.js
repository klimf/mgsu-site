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
    SelectInput,
    FunctionField
} from "admin-on-rest";

export const DontaionList = (props) => (
    <List title="Донаты" {...props}>
        <Datagrid>
            <FunctionField label="Имя" render={record => `${record.user.lastName} ${record.user.firstName} ${record.user.middleName}`}></FunctionField>
            <TextField source="user.email" label="Почта"/>
            <TextField source="project.name" label="Проект"/>
            <NumberField source="value" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}}
                         label="Пожертвование"/>
            <BooleanField source="recursive" label="Ежемесячно"/>
            <DateField source="date" label="Дата"/>
            <BooleanField source="confirm" label="Подтвержден"/>
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
            <TextInput source="firstName" label="Имя"/>
            <TextInput source="lastName" label="Фамилия"/>
            <TextInput source="middleName" label="Отчество"/>
            <TextInput source="email" label="Почта"/>
            <NumberInput source="value" label="Пожертвование"/>
            <BooleanInput source="recursive" label="Ежемесячно"/>
            <DateInput source="date" label="Дата"/>
        </SimpleForm>
    </Edit>
);

export const DontaionCreate = (props) => (
    <Create {...props}>
       <SimpleForm>
            <ReferenceInput label="Проект" source="name" reference="projects" allowEmpty>
                <SelectInput optionText="project"/>
            </ReferenceInput>
            <TextInput source="firstName" label="Имя"/>
            <TextInput source="lastName" label="Фамилия"/>
            <TextInput source="middleName" label="Отчество"/>
            <TextInput source="email" label="Почта"/>
            <NumberInput source="value" label="Пожертвование"/>
            <BooleanInput source="recursive" label="Ежемесячно"/>
            <DateInput source="date" label="Дата"/>
        </SimpleForm>
    </Create>
);