const expect  = chai.expect
import Vue from "vue"
import Row from '../src/grid/row'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row',()=>{
    it('存在', ()=>{
        expect(Row).to.exist
    })
    it('接受 gutter 属性', (done)=>{
        const div = document.createElement('div')
        Vue.component('g-row',Row)
        Vue.component('g-col',Col)
        document.body.appendChild(div)
        div.innerHTML = `
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(()=>{
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle[cols[0]].paddingLeftRight).to.eq('10px')
            expect(getComputedStyle[cols[0]].paddingLeft).to.eq('10px')
            done()
        },1200)
    })
})