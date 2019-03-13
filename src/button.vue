<template>    
    <button class="z-button" :class="{[`icon-${iconPosition}`]:true}">
        <z-icon class="icon" :name="icon" v-if="icon"></z-icon>
        <div class="content">
            <slot></slot>
        </div>       
    </button>
</template>
<script>
export default {
    props:{
        icon:{},
        iconPosition:{
            type:String,
            default:'left',
            validator(value){
                //属性的检查器
                // if(value !=='left' &&  value !=='right'){
                //     return false
                // }else{
                //     return true
                // }
                //return !(value !=='left' && value !=='right')
                return value === 'left' || value ==='right'
        }
    }
    }
}
</script>
<style lang="scss">
    .z-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding:  0 1em;
        border-radius: var(--boder-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover{
            border-color: var(--border-color-hover)
        }

        &:active{background: var(--button-active-bg)}

        &:focus{outline: none;}

        > .icon{order: 1; margin-right: .3em}
        > .content{order: 2;}

        &.icon-right{
            > .icon{order: 2;}
            > .content{order: 1;margin-right:0;margin-left: .3em}
        }
    }
    
</style>