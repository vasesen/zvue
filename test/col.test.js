const expect  = chai.expect
import Vue from "vue"
import Row from '../src/grid/row'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col',()=>{
    it('存在',()=>{
        expect(Col).to.exist
    })
    it('接收span属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                span:1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收offset属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData:{
                span:1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})