const expect  = chai.expect
import Vue from "vue"
import Toast from '../src/toast'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast',()=>{
    it('存在',()=>{
        expect(Toast).to.exist
    })

    describe('props',function(){
        it('接受autoClose',(done)=>{
            let div  = document.createElement('div')
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    autuoClose:1,
                }            
            }).$mount(div)
            setTimeout(()=>{
                expect(document.body.contains(vm.$el).to.equal(false))
                done()
            },1600)
        })

        it('接受closeButton',(done)=>{
            const callback = sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    closeButton:{
                        text:'关闭',
                        callback,
                    },
                }            
            }).$mount()
           let closeButton = vm.$el.querySelector('.close') 
           expect(closeButton.textContent.trim()).to.equal('关闭')
           closeButton.click()
           expect(callback).to.have.been.called
        })
    }) 

    it('接受 enableHtml',()=>{
        const Constructor = Vue.extend('Toast')
        const vm = new Constructor({
            propsData:{enableHtml:true}
        })
        vm.$slots.default=['<i id="test">hi</i>']
        vm.$mount()
        let i = vm.$el.querySelector('#test')
        expect(i).to.exist 
    })

    it('接受 position',()=>{
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData:{position:'bottom'}
        }).$mount()
        expect(vm.$el.classList.contains('position-bottom').to.equal(true))
    })

})