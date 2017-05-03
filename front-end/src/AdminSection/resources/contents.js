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
import {StaticImage} from "../components/customFields";
import RichTextInput from "aor-rich-text-input";
import {required, isStr, currency} from '../validationRules';
import {resolveStatic} from "../../common/helpers";

export const Content = {
    list: (props) => (
        <List title="Разделы" {...props} perPage={100}>
            <Datagrid >
                <TextField source="title" label="Название"/>
                <TextField source="content" label="Содержание"/>
                <EditButton  />
            </Datagrid>
        </List>
    ),
    edit: (props) => (
        <Edit title="Изменение раздела" {...props}>
            <SimpleForm>
                <TextInput source="title" label="Название раздела" validate={[required]}/>
                <RichTextInput source="content" label="Содержание" validate={[required]}/>
            </SimpleForm>
        </Edit>
    ),
    create: (props) => (
        <Create title={'Добавить раздел'} {...props}>
            <SimpleForm>
                <TextInput source="title" label="Название раздела" validate={[required]}/>
                <RichTextInput source="content" label="Содержание" validate={[required]}/>
            </SimpleForm>
        </Create>
    )
}


export const News = {
    list: (props) => (
        <List title="Новости" {...props} perPage={100}>
            <Datagrid >
                <StaticImage source="img" label="Изображение"></StaticImage>
                <TextField source="title" label="Заголовок"/>
                <TextField source="description" label="Короткое описание"/>
                <TextField source="content" label="Содержание"/>
                <DateField source="creatingDate" label="Создано"/>
                <EditButton  />
            </Datagrid>
        </List>
    ),
    edit: (props) => (
        <Edit title="Изменение новости" {...props}>
        <SimpleForm>
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="title" label="Заголовок" validate={[required]}/>
                <TextInput source="description" label="Короткое описание" validate={[required]}/>
                <RichTextInput source="content" label="Содержание" validate={[required]}/>
            </SimpleForm>
        </Edit>
    ),
    create:  (props) => (
        <Create title={'Добавить новость'} {...props}>
            <SimpleForm>
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="title" label="Заголовок" validate={[required]}/>
                <TextInput source="description" label="Короткое описание" validate={[required]}/>
                <RichTextInput source="content" label="Содержание" validate={[required]}/>
            </SimpleForm>
        </Create>
    )
}

export const Events = {
    list: (props) => (
        <List title="События" {...props} perPage={100}>
            <Datagrid >
                <StaticImage source="img" label="Изображение"></StaticImage>
                <TextField source="title" label="Заголовок"/>
                <TextField source="description" label="Короткое описание"/>
                <TextField source="content" label="Содержание"/>
                <DateField source="creatingDate" label="Создано"/>
                <DateField source="date" label="Дата проведения"/>
                <EditButton  />
            </Datagrid>
        </List>
    ),
    edit: (props) => (
        <Edit title="Изменение события" {...props}>
        <SimpleForm>
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="title" label="Заголовок" validate={[required]}/>
                <TextInput source="description" label="Короткое описание" validate={[required]}/>
                <DateInput source="date" label="Дата проведения" validate={[required]}/>
                <RichTextInput source="content" label="Содержание" validate={[required]}/>
            </SimpleForm>
        </Edit>
    ),
    create: (props) => (
        <Create title={'Новое событие'} {...props}>
            <SimpleForm>
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="title" label="Заголовок" validate={[required]}/>
                <TextInput source="description" label="Короткое описание" validate={[required]}/>
                <DateInput source="date" label="Дата проведения" validate={[required]}/>
                <RichTextInput source="content" label="Содержание" validate={[required]}/>
            </SimpleForm>
        </Create>
    )
}


export const Partners = {
    list: (props) => (
        <List title="Партнеры" {...props} perPage={100}>
            <Datagrid >
                <StaticImage source="img" label="Логотип"></StaticImage>
                <TextField source="title" label="Название"/>
                <EditButton  />
            </Datagrid>
        </List>
    ),
    edit:  (props) => (
        <Edit title="Изменение партнера" {...props}>
            <SimpleForm>
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="title" label="Название" validate={[required]}/>
            </SimpleForm>
        </Edit>
    ),
    create: (props) => (
        <Create title={'Дабавить партнера'} {...props}>
            <SimpleForm>
                <ImageInput source="picture" label="Фотография" accept="image/*">
                    <ImageField source="img.small"/>
                </ImageInput>
                <TextInput source="title" label="Название" validate={[required]}/>
            </SimpleForm>
        </Create>
    )
}

const Options = {
    list: (props) => (props) => (
        <List title="Опции" {...props} perPage={100}>
            <Datagrid >
                <TextField source="title" label="Название"/>
                <TextField source="content" label="Значение"/>
                <EditButton  />
            </Datagrid>
        </List>
    ),
    edit:  (props) => (
        <Edit title="Изменение опции" {...props}>
            <SimpleForm>
                <TextInput source="title" label="Название" validate={[required]}/>
                <RichTextInput source="content" label="Значение" validate={[required]}/>
            </SimpleForm>
        </Edit>
    ),
    create: (props) => (
        <Create title={'Дабавить опцию'} {...props}>
            <SimpleForm>
                <TextInput source="title" label="Название" validate={[required]}/>
                <RichTextInput source="content" label="Значение" validate={[required]}/>
            </SimpleForm>
        </Create>
    )
}


export const contentsCategories = {
    about: {
        category: 'about-content',
        label: 'О фонде',
        component: Content
    },
    alumni: {
        category: 'alumni',
        label: 'Клуб выпускников',
        component: Content
    },
    news: {
        category: 'news',
        label: 'Новости',
        component: News
    },
    events: {
        category: 'events',
        label: 'События',
        component: Events
    },
    partners: {
        category: 'partners',
        label: 'Партнеры',
        component: Partners
    }
};
