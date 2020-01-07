<template>
<div class="wrapper" :class="toastClass">
    <div class="toast" ref="toastRef" > 
        <div class="message">
            <slot v-if="!enablehtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="handleCloseToast">
            {{closeButton.text}}
        </span>
    </div>
</div>
    
</template>
<script>
export default {
    name:'ZToast',
    props:{
        autoClose:{
            type:Boolean,
            default:true
        },
        autoCloseDelay:{
            type:Number,
            default:3
        },
        closeButton:{
            type:Object,
            default(){
                return {
                    text:'关闭' ,
                    callback:undefined
                }
            }
        },
        enablehtml:{
            type:Boolean,
            default:false
        },
        position:{
            type:String,
            default:'top',
            validator(value){
                return ['top','bottom','middle'].indexOf(value)>=0
            }
        }
    },
    mounted(){
        this.updateStyles()  
        this.execAutoClose()     
    },
    computed:{
        toastClass(){
            return {[`position-${this.position}`]:true}
        }
    },
    methods:{
        updateStyles(){
            this.$nextTick(()=>{
            this.$refs.line.style.height = `${this.$refs.toastRef.getBoundingClientRect().height}px`       
        })
        },
        execAutoClose(){
            if(this.autoClose){
                setTimeout(()=>{
                this.close() 
                },this.autoCloseDelay*1000)
            }
        },
        close(){
            this.$el.remove()
            this.$emit('close')
            this.$destroy()
        },
        handleCloseToast(){
            this.close()
            if(this.closeButton && this.closeButton==='function'){
                this.closeButton.callback()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
     $font-size:14px;
     $animation-duration:300ms;
     @keyframes slide-up {
         0%{opacity: 0;transform: translateY(100%)}
         100%{opacity: 1;transform: translateY(0)}
     }
     @keyframes slide-down {
         0%{opacity: 0;transform: translateY(-100%)}
         100%{opacity: 1;transform: translateY(0)}
     }
     @keyframes fade-in {
         0%{opacity: 0}
         100%{opacity: 1;}
     }
     .wrapper{
         position: fixed;
         left: 50%;
         transform: translateX(-50%);
         &.position-top{
            top:0;
            .toast{
                animation: slide-down $animation-duration;
            }
        }
        &.position-bottom{
            bottom:0;
            .toast{
                animation: slide-up $animation-duration;
            }
        }
        &.position-middle{
            top:50%;
            transform: translateX(-50%) translateY(-50%);
            .toast{
                animation: fade-in $animation-duration;
            }
        }
     }
    .toast{
        color: #eeeeee;
        border:1px solid #999;
        border-radius: 4px;
        font-size: $font-size;
        line-height: 1.8;
        min-height: 40px;
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.75);
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        padding: 0px 16px;
        .message{
            padding: 8px 0;
        }
        .line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left:10px;
        }
        .close{
            padding-left:16px;
            cursor: pointer;
            flex-shrink: 0
        }
        
    }
    
</style>