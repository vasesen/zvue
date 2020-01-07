<template>
    <div class="toast"> 
        <slot></slot>
        <div class="line"></div>
        <span class="close" v-if="closeButton" @click="handleCloseToast">
            {{closeButton.text}}
        </span>
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
                    callback:(toast)=>{
                        toast.close()
                    }
                }
            }
        }
    },
    mounted(){
        if(this.autoClose){
            setTimeout(()=>{
               this.close() 
            },this.autoCloseDelay*1000)
        }
    },
    methods:{
        close(){
            this.$el.remove()
            this.$destroy()
        },
        handleCloseToast(){
            this.close()
            this.closeButton.callback()
        }
    }
}
</script>
<style lang="scss" scoped>
     $font-size:14px;
    .toast{
        color: #eeeeee;
        border:1px solid #999;
        border-radius: 4px;
        position: fixed;
        top:0;
        left: 50%;
        transform:translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        height: 40px;
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.75);
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        padding: 0 16px;
    }
    .lone{
        height: 100px;
        border-left: 1px solid #666666;
        margin-left:10px;
    }
    .close{
        padding-left:16px;
        cursor: pointer;
    }
</style>