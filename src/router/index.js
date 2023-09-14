

import {createRouter, createWebHistory} from 'vue-router'
import Counter from '../components/CounterComponent.vue'
import UserList from '../components/UserList.vue'
import Register from '../components/RegistrationComponent.vue'
import GreetingComponent from '../components/GreetingComponent.vue'
import AuthUser from "../components/AuthUser.vue"
import Employee from "../components/EmployeeComponent.vue"
import Customer from "../components/CustomerComponent.vue"
import UserDetails from '../components/UserDetails.vue'
import ContactManager from '../components/ContactManager.vue'
import EditContact from '../components/EditContact.vue'
import ViewContact from '../components/ViewContact.vue'
import AddContact from '../components/AddContact.vue'

const routes = [
    {
        path: '/counter',
        name: 'Counter',
        component: Counter
    },

    {
        path: '/users',
        name: 'UserList',
        component: UserList
    },

    {
        path: '/users/:userid',
        name: 'UserDetails',
        component: UserDetails
    },
    {
        path: '/form',
        name: 'Register',
        component: Register
    },
    
    {
        path: '/cond',
        name: 'GreetingComponent',
        component: GreetingComponent
    },
    {
        path: '/auth',
        name: 'AuthUser',
        component: AuthUser
    },
    {
        path: '/emp',
        name: 'Employee',
        component:Employee
    },
    {
        path: '/cust',
        name: 'Customer',
        component: Customer
    },
    {
        path: '/contacts',
        name: 'ContactManager',
        component: ContactManager
    },

    {
        path: '/contacts/add',
        name: 'AddContact',
        component: AddContact

    },

    {
        path: '/contacts/edit/:contactId',
        name: 'EditContact',
        component: EditContact
    },

    {
        path: '/contacts/view/:contactId',
        name: 'ViewContact',
        component: ViewContact
    },
    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router