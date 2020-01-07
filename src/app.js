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
import Footer from './footer'
import Toast from './toast'
import Pulgin from './plugin'

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
Vue.component('z-footer',Footer)
Vue.component('z-toast', Toast)
Vue.use(Pulgin)


new Vue({
    el:'#app',
    data:{
        loading1 : false,
        loading2 : false,
        message:'双向绑定'
    },
    created(){
        
    },
    methods:{
        showToast(){
            this.$toast('请注意你的言辞！',{
                enableHtml:false,
                position:'middle',
                closeButton:{
                    text:'关闭',
                    callback(){}
                },
                autoClose:false,
                autoCloseDelay:300
            })
        }
    }
})
