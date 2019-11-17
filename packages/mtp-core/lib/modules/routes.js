import { addRoute } from 'meteor/vulcan:core';
import MeetupCreation from '../components/MeetupCreation';
import MeetupList from '../components/MeetupList'
import MeetupAdminList from '../components/MeetupAdminList'

addRoute({ name: 'create', path: '/create', component: MeetupCreation })
addRoute({ name: 'list', path: '/list', component: MeetupList })
addRoute({ name: 'admin-list', path: '/admin/list', component: MeetupAdminList })