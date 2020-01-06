import Vue from 'vue'
import Button from './Button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Col from './grid/col.vue'
import Row from './grid/row.vue'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Toast from './toast'


Vue.component('z-button',Button)
Vue.component('z-icon',Icon)
Vue.component('z-button-group',ButtonGroup)
Vue.component('z-input',Input)
Vue.component('z-col',Col)
Vue.component('z-row',Row)
Vue.component('z-layout',Layout)
Vue.component('z-header',Header)
Vue.component('z-sider',Sider)
Vue.component('z-content',Content)
Vue.component('z-toast', Toast)
new Vue({
    el:'#app',
    data:{
        loading1 : false,
        loading2 : false,
        message:'双向绑定'
    },
    created(){
        this.showToast()
    },
    methods:{
       showToast(){
           this.$toast('toast message')
       }
    }
})
