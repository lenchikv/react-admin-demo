
import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import Dashboard from './dashboard/dashboard';
import { UserList } from './users/users';
import { PostList, PostEdit, PostCreate } from './posts/posts';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './auth/authProvider';
// import dataProvider from './data/dataProvider';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
        <Admin authProvider={authProvider}  dashboard={Dashboard} dataProvider={dataProvider}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
            <Resource name="users" list={UserList} icon={UserIcon}/>
        </Admin>
);

export default App;
