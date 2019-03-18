import Vue from 'vue'
import Button from './Button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'



Vue.component('z-button',Button)
Vue.component('z-icon',Icon)
Vue.component('z-button-group',ButtonGroup)
new Vue({
    el:'#app',
    data:{
        loading1 : false,
        loading2 : false
    }
})