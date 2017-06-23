import App from './App.vue'
import BaseForm from './vuepage/form/BaseForm.vue'
import Index from './vuepage/Index.vue'
export  default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '',
                redirect: '/index'
            }, {
                path: 'index',
                component: Index
            },
            {
                path: 'baseForm',
                component: BaseForm
            }
        ]
    }
]