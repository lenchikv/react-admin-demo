// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import CustomizedUrlField from '../components/CustomizedUrlField';

export const UserList = props => (
<List {...props}>
<Datagrid rowClick="edit">
    <TextField source="id" />
    <TextField source="name" />
    <EmailField source="email" />
    <TextField source="phone" />
    <CustomizedUrlField source="website" />
    <TextField source="company.name" />
    </Datagrid>
    </List>
);