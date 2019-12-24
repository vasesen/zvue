const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', ()=>{
    it('存在.', ()=>{
        expect(Input).to.exist
    })

    describe('props',()=>{
        // beforeEach(function(){
        //     const Constructor = Vue.extend(Input) 
        // })
        const Constructor = Vue.extend(Input) 
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('接收 value.', ()=>{
            vm = new Constructor({
                propsData:{
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')       
        })

        it('接受 disabled', ()=>{
            vm = new Constructor({
                propsData:{
                    disabled:true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('接受 readonly', ()=>{
            vm = new Constructor({
                propsData:{
                    readonly:true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
            //此处如果readonly 测试失败 
        })

        it('接收 error', ()=>{
            vm = new Constructor({
                propsData:{
                    error:'抛出错误'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.eq('抛出错误')
        })
    
    })

    
    describe('事件event',()=>{
        const Constructor = Vue.extend(Input) 
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持change/input/focus/blur事件',()=>{
            ['change','input','focus','blur'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName,callback)
                let event = new Event(eventName)
                //此处event 只读属性  网上教程用这个属性 
                Object.defineProperty(event,'target',{value:{value:'双向绑定'},enumerable:true})
                const inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('双向绑定')
            })
        })
        // it('支持change事件',()=>{   
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('change',callback)
        //     let event = new Event('change')
        //     const inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持input事件',()=>{
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('input',callback)
        //     let event = new Event('input')
        //     const inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持blur事件',()=>{
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('blur',callback)
        //     let event = new Event('blur')
        //     const inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持focus事件',()=>{
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake();
        //     vm.$on('focus',callback)
        //     let event = new Event('focus')
        //     const inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     expect(callback).to.have.been.calledWith(event)
        // })
    })

})
