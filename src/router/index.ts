import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from "@/views/Money.vue";
import Label from "@/views/Label.vue";
import Statistics from "@/views/Statistics.vue";
import NotFound from "@/views/NotFound.vue";
import LabelEdit from '@/views/LabelEdit.vue';

import Demo from '@/views/Demo.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
    path: '/label',
    name: 'label',
    component: Label
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '/label/edit/:id',
    name: 'labelEdit',
    component: LabelEdit
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
