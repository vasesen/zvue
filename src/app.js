import Vue from 'vue'
import Button from './Button'
import Icon from './icon'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'


Vue.component('z-button',Button)
Vue.component('z-icon',Icon)
Vue.component('z-button-group',ButtonGroup)
Vue.component('z-input',Input)
new Vue({
    el:'#app',
    data:{
        loading1 : false,
        loading2 : false
    }
})

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect
//单元测试++
// {
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData:{
//             icon:'settings'
//         }
//     })
//     button.$mount('#test')
//     let useElement = button.$el.querySelector('use')
//     console.log(useElement)
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-settings')
//     button.$el.remove()
//     button.$destroy()
// }

// {
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData:{
//             icon:'settings',
//             loading:true
//         }
//     })
//     button.$mount(`#test`)
//     let useElement = button.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     button.$el.remove()
//     button.$destroy()
// }

// {
//     const div =  document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const button = new Constructor({
//         propsData:{
//             icon:'settings'
//         }
//     })
//     button.$mount(div)
//     let svg = button.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
// }
//click事件测试
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData:{
//             icon:'settings'
//         }
//     })
//     vm.$mount()
//     let spy = chai.spy(function(){})
//     vm.$on('click',spy)
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
// }