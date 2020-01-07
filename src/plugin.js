import Toast from './toast'
export default{
    install(Vue,options){
        Vue.prototype.$toast = function (message) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsdata:{
                    closeButton:{
                        text:'message',
                        callback(){
                            console.log('user message')
                        }
                    }
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}