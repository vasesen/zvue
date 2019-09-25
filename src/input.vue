<template>
    <div class="wrapper">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly" >
    </div>
</template>
<script>
export default {
    name:'ZvInput',
    props:{
        value:{
            type:String
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        error:{
            type:String
        }
    }
}
</script>
<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#666;
    $border-radius:4px;
    $font-size:12PX;
    $box-shadow-color:rgba(0,0,0,0.5);
    .wrapper{
        >input{
            height:$height;
            border: 1px solid $border-color;    
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover{
                border-color:$border-color-hover;
            }
            &:focus{
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none
            }
            &[disabled]{
                border-color: #aaaaaa;
                color: #aaa;
                cursor: not-allowed;
            }
        }
    }
</style>