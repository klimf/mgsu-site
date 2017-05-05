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
    FunctionField,
    DeleteButton
} from "admin-on-rest";
import {required, isStr, currency} from '../validationRules';

export const DontaionList = (props) => (
    <List title="Донаты" {...props} pagination={null}>
        <Datagrid>
            <FunctionField label="Имя" render={record => `${record.user.lastName} ${record.user.firstName} ${record.user.middleName}`}></FunctionField>
            <TextField source="user.email" label="Почта"/>
            <TextField source="project.name" label="Проект"/>
            <NumberField source="value" options={{style: 'currency', currency: 'RUB', maximumFractionDigits: 0}}
                         label="Пожертвование"/>
            <BooleanField source="recursive" label="Ежемесячно"/>
            <DateField source="date" label="Дата" />
            <BooleanField source="confirmed" label="Подтвержден"/>
            <DeleteButton />
        </Datagrid>
    </List>
);

export const DontaionEdit = (props) => (
    <Edit title="Изменение пользователя" {...props}>
        <SimpleForm>
            <ReferenceInput label="Проект" source="projectId" reference="projects" allowEmpty validate={[required]}>
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="firstName" label="Имя" validate={[required]}/>
            <TextInput source="lastName" label="Фамилия" validate={[required]}/>
            <TextInput source="middleName" label="Отчество" validate={[required]}/>
            <TextInput source="email" label="Почта"/>
            <NumberInput source="value" label="Пожертвование" validate={[required]}/>
            <BooleanInput source="recursive" label="Ежемесячно" validate={[required]}/>
            <DateInput source="date" label="Дата"/>
        </SimpleForm>
    </Edit>
);

export const DontaionCreate = (props) => (
    <Create {...props}>
       <SimpleForm>
            <ReferenceInput label="Проект" source="projectId" reference="projects" allowEmpty>
                <SelectInput optionText="name"/>
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